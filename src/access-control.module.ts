import {DynamicModule, Module} from "@nestjs/common";
import {APP_GUARD} from "@nestjs/core";
import {RoleGuard} from "./role.guard";


@Module({})
export class AccessControlModule {
    static forAccess(): DynamicModule {
        return {
            module: AccessControlModule,
            providers: [
                {provide: APP_GUARD, useClass: RoleGuard}
            ]
        };
    }
}
