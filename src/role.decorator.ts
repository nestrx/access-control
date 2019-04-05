import { SetMetadata } from '@nestjs/common';

export function Role(role: string = 'user') {
  return SetMetadata('role', role);
}
