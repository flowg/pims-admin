/**
 * Angular imports
 */
import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {
    MatPaginator,
    PageEvent
} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * App imports
 */
import { ValueWithValidity } from 'src/app/models/value-with-validity';

/**
 * TypeScript entities and constants
 */
const noTitleError: string =
    '***WARNING*** You MUST provide a title to describe what ' +
    'this table is about, in order to be RGAA-compatible';
const noAvailableColumnsError: string =
    '***WARNING*** You MUST provide a definition ' +
    'of the columns you expect to be available for display in this implementation ' +
    'of PimsTableComponent';
const defaultInitialPagination: Partial<PageEvent> = {
    pageIndex: 0,
    pageSize:  5
};
const pageSizeOptions: number[] = [
    5,
    10,
    25,
    50
];

export interface PimsTableColumn<T> {
    name: string;
    label: string;
    tooltipLabel: string;
    sortable: boolean;
}

@Component( {
    selector:    'pims-pims-table',
    templateUrl: './pims-table.component.html',
    styleUrls:   [ './pims-table.component.scss' ]
} )
export class PimsTableComponent<T> implements OnChanges, OnInit, AfterViewInit {
    @Input() tableTitle: string;
    @Input() availableColumns: PimsTableColumn<T>[];
    @Input() totalData: T[];
    @Input() initialPagination: Partial<PageEvent>;
    @Input() validityToggle = false;

    @ViewChild( MatPaginator ) paginator: MatPaginator;
    @ViewChild( MatSort ) sort: MatSort;

    dataSource: MatTableDataSource<T>;
    columnsNames: string[] = [];
    pageSizeOptions: number[];

    constructor( private snackbar: MatSnackBar ) {
    }

    /**********************************************************************************************\
     *                                                                                            *
     *                                       Lifecycle Hooks                                      *
     *                                                                                            *
     \*********************************************************************************************/

    /**
     * This lifecycle hook is executed a first time right after instantiation
     * of this Component, then, on each change of at least one Input property.
     *
     * @param changes: SimpleChanges, changes made on the Input properties
     * of this Component
     */
    ngOnChanges( changes: SimpleChanges ): void {
        this.initialPagination = this.initialPagination || defaultInitialPagination;

        /*
         * We're defining a new DataSource object for this table,
         * on each new value for totalData.
         *
         * We can do it because CdkTable will, by itself,
         * disconnect the previous instance of dataSource & connect
         * the new one, obtained through Input Property
         * ( as can be seen via its setter for dataSource & the _switchDataSource() method )
         */
        if ( changes.totalData && Array.isArray( this.totalData ) ) {
            this.dataSource = new MatTableDataSource<T>( this.totalData );
        }
    }

    /**
     * This lifecycle hook is executed ONLY ONCE, right after the first
     * execution of ngOnChanges()
     */
    ngOnInit(): void {
        this.pageSizeOptions = pageSizeOptions;

        // Checking if mandatory Input Properties are provided by the parent Component
        if ( !this.tableTitle ) {
            throw new Error( noTitleError );
        }
        if ( !this.availableColumns ) {
            throw new Error( noAvailableColumnsError );
        }

        /*
         * Here, we're defining which columns will be actually
         * displayed by MatTable
         */
        for ( const column of this.availableColumns ) {
            this.columnsNames.push( column.name );
        }
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    /******************************************************************************************************************\
     *                                                                                                                *
     *                                                 Other Methods                                                  *
     *                                                                                                                *
     \*****************************************************************************************************************/

    /**
     * Cette méthode permet de calculer automatiquement la valeur de
     * l'attribut tabindex permettant de naviguer au clavier, cellule par cellule,
     * puis, le cas échéant, accéder à l'input au sein d'une cellule éditable
     *
     * @param rowIndex: number, l'indice ( 0-based ) de la ligne de la cellule
     * en question
     * @param columnIndex: number, l'indice ( 0-based ) de la colonne de la cellule
     * en question
     */
    getTabIndexForCell( rowIndex: number, columnIndex: number ): number {
        return 1000 + rowIndex * 100 + columnIndex * 5;
    }

    onValidityChanged(
        event: MatSlideToggleChange,
        row: T,
        rowIndex: number,
        column: PimsTableColumn<T>
    ): void {
        // TODO: Add a MatTooltip to inform that the toggle is to check validity
        // TODO: Add styling
        // TODO: Implement the switch to Accordion for mobile

        // Changing the validity state in our copy of the data
        ( row[ column.name ] as ValueWithValidity ).valid = event.checked;

        // Notifying the user
        const message = `The information '${column.name}' for the row N° ${rowIndex} is now considered: `
            + ( event.checked ? 'valid' : 'invalid' );
        this.snackbar.open(
            message,
            undefined,
            {
                duration:         5 * 1000,
                verticalPosition: 'top'
            }
        );
    }

    getValue( item: ValueWithValidity | string ): string {
        return ( item as ValueWithValidity ).value ? ( item as ValueWithValidity ).value : ( item as string );
    }
}
