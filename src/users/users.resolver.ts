import { Resolver, Query, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Customer } from '../customers/customer.entity';
import { Float } from 'type-graphql';
import { CustomersService } from '../customers/customers.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private customersService: CustomersService,
  ) {}

  @Query(() => User)
  user(@Args('id') id: string) {
    return this.usersService.findById(id);
  }

  @ResolveProperty(() => [Customer])
  customers(@Parent() user: User) {
    return this.usersService.findCustomersByUserId(user.id);
  }

  @ResolveProperty(() => Float)
  balance(@Parent() user: User, @Args('customerId') customerId: string) {
    return this.customersService.getUserBalance(user.id, customerId);
  }
}
