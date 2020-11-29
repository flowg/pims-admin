/**
 * Angular imports
 */
import {
    Component,
    OnInit
} from '@angular/core';

/**
 * App imports
 */
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { PimsTableColumn } from 'src/app/modules/shared/components/pims-table/pims-table.component';

@Component( {
    selector:    'pims-users-table',
    templateUrl: './users-table.component.html',
    styleUrls:   [ './users-table.component.scss' ]
} )
export class UsersTableComponent implements OnInit {
    totalData: User[];
    availableColumns: PimsTableColumn<User>[];

    constructor( private userService: UserService ) {
    }

    ngOnInit(): void {
        this.totalData = this.userService.getUsers();
        this.availableColumns = [
            {
                name:         'name',
                label:        'Name',
                tooltipLabel: 'Name',
                sortable:     true
            },
            {
                name:         'email',
                label:        'Email',
                tooltipLabel: 'Email',
                sortable:     true
            },
            {
                name:         'phone',
                label:        'Phone',
                tooltipLabel: 'Phone',
                sortable:     true
            },
            {
                name:         'address',
                label:        'Address',
                tooltipLabel: 'Address',
                sortable:     true
            }
        ];
    }
}
