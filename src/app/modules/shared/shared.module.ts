/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/**
 * App imports
 */
import { PimsCardComponent } from './components/pims-card/pims-card.component';
import { PimsTableComponent } from './components/pims-table/pims-table.component';

@NgModule( {
    imports:      [
        CommonModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        MatSnackBarModule
    ],
    declarations: [
        PimsCardComponent,
        PimsTableComponent
    ],
    exports:      [
        CommonModule,
        PimsCardComponent,
        PimsTableComponent
    ]
} )
export class SharedModule {
}
