/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * App imports
 */
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule( {
    imports:      [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [ DashboardComponent ]
} )
export class DashboardModule {
}