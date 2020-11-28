/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

/**
 * App imports
 */
import { DashboardComponent } from './dashboard.component';

/**
 * TypeScript entities and constants
 */
const routes: Routes = [
    {
        path:      'dashboard',
        component: DashboardComponent
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class DashboardRoutingModule {
}
