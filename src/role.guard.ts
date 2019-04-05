import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
  }

  canActivate(context: ExecutionContext)
    : boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get<string>('role', context.getHandler());
    if (!role) {
      return true;
    }
    const roles = {
      user: ['user', 'agent', 'accounting', 'admin'],
      agent: ['agent', 'admin'],
      accounting: ['accounting', 'admin'],
      admin: ['admin'],
    };
    let allows = roles[role];
    if (!allows) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user && allows.indexOf(user.role) !== -1;
  }
}
