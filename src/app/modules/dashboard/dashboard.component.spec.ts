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
import { DashboardComponent } from './dashboard.component';

describe( 'DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
                declarations: [ DashboardComponent ]
            } )
            .compileComponents();
    } );

    beforeEach( () => {
        fixture = TestBed.createComponent( DashboardComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should be created', () => {
        expect( component ).toBeTruthy();
    } );
} );
