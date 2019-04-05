import { createParamDecorator } from "@nestjs/common";

export function User(property?: string) {
  const param = createParamDecorator((data, req) => {
    return req && req.user ? data ? req.user[data] : req.user : false;
  });
  return param(property);
}

