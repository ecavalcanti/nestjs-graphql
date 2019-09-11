import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { CustomerUser } from './customer-user.entity';

@Entity('customers')
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(type => CustomerUser, customerUser => customerUser.user)
  public customerUsers!: CustomerUser[];
}
