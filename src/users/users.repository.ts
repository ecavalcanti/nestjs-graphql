import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { Customer } from '../customers/customer.entity';
import { getManager } from 'typeorm';
import { CustomerUser } from '../customers/customer-user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  findCustomersByUserId(id: string): Promise<Customer[]> {
    return getManager().createQueryBuilder(Customer, 'customers')
      .leftJoinAndSelect(CustomerUser, 'customers_users', 'customers_users.customerId = customers.id')
      .where('customers_users.userId = :id', { id }).getMany();
  }
}
