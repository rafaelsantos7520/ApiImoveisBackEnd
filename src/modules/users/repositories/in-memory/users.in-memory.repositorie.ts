import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../users-prisma.repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersInMemoryRepository implements UsersRepository {
  private database: User[] = [];

  findAll(): User[] | Promise<User[]> {
    return plainToInstance(User, this.database);
  }

  findOne(id: string): User | Promise<User> {
    const user = this.database.find((user) => user.id === id);

    if (user) {
      return user;
    }

    throw new Error(`User with ID ${id} not found.`);
  }

  findByEmail(email: string): User | Promise<User> {
    const user = this.database.find((user) => user.email === email);
    return plainToInstance(User, user);
  }

  update(
    id: string,
    updatedData: Partial<CreateUserDto>,
  ): User | Promise<User> {
    const userIndex = this.database.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      const updatedUser = { ...this.database[userIndex], ...updatedData };
      this.database[userIndex] = updatedUser;
      return plainToInstance(User, updatedUser);
    }

    throw new Error('User not found.');
  }

  delete(id: string): void | Promise<void> {
    const userIndex = this.database.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.database.splice(userIndex, 1);
    }
  }

  create(data: CreateUserDto): User | Promise<User> {
    const newUser = new User();
    Object.assign(newUser, {
      ...data,
    });
    this.database.push(newUser);
    return plainToInstance(User, newUser);
  }
}
