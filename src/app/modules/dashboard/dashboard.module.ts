/**
 * Angular imports
 */
import { NgModule } from '@angular/core';

/**
 * App imports
 */
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule( {
    imports:      [
        SharedModule,
        DashboardRoutingModule
    ],
    declarations: [ DashboardComponent, UsersTableComponent ]
} )
export class DashboardModule {
}
