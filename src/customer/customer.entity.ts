import { Order } from 'src/order/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("CUSTOMER")
export class Customer extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column("varchar", {length:255})
  Name: string;

  @Column("varchar", {length:50})
  Email: string;

  @Column("varchar", {length:50})
  Password: string;

  @Column("varchar", {length:10})
  Phone: string;

  @OneToMany(type => Order, order => order.cus)
  orders: Order[];
}