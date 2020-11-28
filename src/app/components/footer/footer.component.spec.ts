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
import { FooterComponent } from './footer.component';

describe( 'FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
                declarations: [ FooterComponent ]
            } )
            .compileComponents();
    } );

    beforeEach( () => {
        fixture   = TestBed.createComponent( FooterComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should be created', () => {
        expect( component ).toBeTruthy();
    } );
} );
