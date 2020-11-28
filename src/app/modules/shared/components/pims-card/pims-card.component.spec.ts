/**
 * Angular imports
 */
import {
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

/**
 * App imports
 */
import { PimsCardComponent } from './pims-card.component';

describe( 'PimsCardComponent', () => {
    let component: PimsCardComponent;
    let fixture: ComponentFixture<PimsCardComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
                declarations: [ PimsCardComponent ]
            } )
            .compileComponents();
    } );

    beforeEach( () => {
        fixture   = TestBed.createComponent( PimsCardComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should be created', () => {
        expect( component ).toBeTruthy();
    } );
} );
