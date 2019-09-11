import { Resolver, ResolveProperty, Parent, Args } from '@nestjs/graphql';
import { Float } from 'type-graphql';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';

@Resolver(() => Customer)
export class CustomersResolver {

  constructor(private customersService: CustomersService) {}

  @ResolveProperty(() => Float)
  userBalance(@Parent() customer: Customer, @Args('userId') userId: string) {
    return this.customersService.getUserBalance(userId, customer.id);
  }

}
