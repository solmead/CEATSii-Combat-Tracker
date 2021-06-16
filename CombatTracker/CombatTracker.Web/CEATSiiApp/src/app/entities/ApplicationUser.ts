






    import * as Enums from './EnumDefinitions'
    import SecurityRoles = Enums.EnumDefinitions.SecurityRoles;
    export class ApplicationUser {
        id: string;
        email: string;
        phoneNumber: string;
        userName: string;
        securityStamp: string;
        concurrencyStamp: string;
        twoFactorEnabled: boolean;
        accessFailedCount: number;
        lockoutEnabled: boolean;
        lockoutEnd?: Date;
        roles: SecurityRoles[];

        constructor() {
        }
    }


