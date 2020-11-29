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
import { UsersTableComponent } from './users-table.component';

describe( 'UsersTableComponent', () => {
    let component: UsersTableComponent;
    let fixture: ComponentFixture<UsersTableComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
                declarations: [ UsersTableComponent ]
            } )
            .compileComponents();
    } );

    beforeEach( () => {
        fixture = TestBed.createComponent( UsersTableComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should be created', () => {
        expect( component ).toBeTruthy();
    } );
} );
