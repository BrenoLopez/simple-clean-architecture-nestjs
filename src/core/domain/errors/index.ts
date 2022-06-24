import { UserAlreadyExist } from './user/user-already-exist';

export class DomainError {
  static UserAlreadyExist = new UserAlreadyExist('Usuário já existe!');
}
