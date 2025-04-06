import { BaseException } from './base.exception';

export class ConflictException extends BaseException {
  constructor(message: string) {
    super(message, 409);
  }
}
