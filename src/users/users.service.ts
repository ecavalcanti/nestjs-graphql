import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { Customer } from '..//customers/customer.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  findById(id: string): Promise<User> {
    return this.usersRepository.findOne({ id });
  }

  findCustomersByUserId(id: string): Promise<Customer[]> {
    return this.usersRepository.findCustomersByUserId(id);
  }

}
