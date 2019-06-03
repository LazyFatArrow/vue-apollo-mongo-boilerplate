
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER"
}

export class CreateUserInput {
    fullname: string;
    username: string;
    email: string;
    password: string;
    role: UserRole;
}

export abstract class IMutation {
    abstract createUser(user: CreateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract user(): User | Promise<User>;
}

export class User {
    id: string;
    fullname: string;
    username: string;
    email: string;
    role: UserRole;
}
