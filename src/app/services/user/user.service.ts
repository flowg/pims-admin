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
        return USERS_DATA;
    }
}
