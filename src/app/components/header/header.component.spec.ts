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
import { HeaderComponent } from './header.component';

describe( 'HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
                declarations: [ HeaderComponent ]
            } )
            .compileComponents();
    } );

    beforeEach( () => {
        fixture   = TestBed.createComponent( HeaderComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should be created', () => {
        expect( component ).toBeTruthy();
    } );
} );
