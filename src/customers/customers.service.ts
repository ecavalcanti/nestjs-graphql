import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerUser } from './customer-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {

  constructor(
    @InjectRepository(CustomerUser)
    private customerUserRepository: Repository<CustomerUser>,
  ) {}

  async getUserBalance(userId: string, customerId: string): Promise<number> {
    const result = await this.customerUserRepository.findOne({
      userId,
      customerId,
    });

    return result.balance;
  }
}
