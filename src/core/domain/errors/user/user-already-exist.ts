import { ErrorHandler } from '../error-handler';

export class UserAlreadyExist extends ErrorHandler {
  constructor(response: string) {
    const error = new Error(response);
    error.name = UserAlreadyExist.name;
    super(error);
  }
}
