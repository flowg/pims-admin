/**
 * Angular imports
 */
import {
    Component,
    Input
} from '@angular/core';

@Component( {
    selector:    'pims-pims-card',
    templateUrl: './pims-card.component.html',
    styleUrls:   [ './pims-card.component.scss' ]
} )
export class PimsCardComponent {
    @Input() title: string;
}
