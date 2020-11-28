/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * App imports
 */
import { PimsCardComponent } from './components/pims-card/pims-card.component';
import { PimsTableComponent } from './components/pims-table/pims-table.component';

@NgModule( {
    imports:      [ CommonModule ],
    declarations: [
        PimsCardComponent,
        PimsTableComponent
    ],
    exports: [
        CommonModule,
        PimsCardComponent,
        PimsTableComponent
    ]
} )
export class SharedModule {
}
