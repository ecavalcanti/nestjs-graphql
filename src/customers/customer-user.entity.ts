import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Customer } from '../customers/customer.entity';

@Entity('customers_users')
export class CustomerUser {
  @PrimaryColumn()
  public userId!: string;

  @PrimaryColumn()
  public customerId!: string;

  @Column({
    name: 'user_balance',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
  })
  balance: number;

  @ManyToOne(type => User, user => user.customerUsers)
  public user!: User;

  @ManyToOne(type => Customer, customer => customer.customerUsers)
  public customer!: Customer;
}
