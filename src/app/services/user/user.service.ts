/**
 * Angular imports
 */
import { Injectable } from '@angular/core';

/**
 * App imports
 */
import {
    User,
    USERS_DATA
} from '../../models/user';

@Injectable( {
    providedIn: 'root'
} )
export class UserService {
    getUsers(): User[] {
        /*
         * We're deep-cloning to make sure this method always returns the reference object,
         * no matter what is done with this value by the end-user
         */
        return JSON.parse( JSON.stringify( USERS_DATA ) );
    }
}
