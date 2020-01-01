






    import * as Enums from './EnumDefinitions'
    import SecurityRoles = Enums.EnumDefinitions.SecurityRoles;
    export class ApplicationUser {
        id: string;
        email: string;
        phoneNumber: string;
        userName: string;
        securityStamp: string;
        roles: SecurityRoles[];

        constructor() {
        }
    }


