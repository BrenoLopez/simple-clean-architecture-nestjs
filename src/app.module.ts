import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { CreateUser } from './core/application/use-cases/user/create-user.use-case';
import { HasherInterface } from './core/domain/interfaces/hasher.interface';
import { UserRepositoryInterface } from './core/domain/repositories/user.repository';
import { BcryptAdapter } from './infra/adapters/bcrypt-adapter';
import { UserInMemoryRepository } from './infra/db/in-memory/user.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: UserInMemoryRepository,
      useClass: UserInMemoryRepository,
    },
    {
      provide: BcryptAdapter,
      useClass: BcryptAdapter,
    },
    {
      provide: CreateUser,
      useFactory: (
        hasher: HasherInterface,
        userRepository: UserRepositoryInterface,
      ) => {
        return new CreateUser(userRepository, hasher);
      },
      inject: [BcryptAdapter, UserInMemoryRepository],
    },
  ],
})
export class AppModule {}
