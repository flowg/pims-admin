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

@NgModule( {
    imports:      [
        SharedModule,
        DashboardRoutingModule
    ],
    declarations: [ DashboardComponent ]
} )
export class DashboardModule {
}
