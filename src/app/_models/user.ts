/**
 * @class: User Model
 * @description: Model class to handle user related data
 * @author: windya yasas
 */
export class User {
    id: number; // user id
    username: string; // user name
    password: string; // password
    firstName: string; // First name of the user
    lastName: string; // Last Name of the user
    token?: string; // JWT token if required
    refresh?:string; // Refresh token if required
}