import { Global, Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { RoleGuard } from "./role.guard";

@Global()
@Module({
  providers: [
    { provide: APP_GUARD, useClass: RoleGuard }
  ]
})
export class AccessControlModule {
}
