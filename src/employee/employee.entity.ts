import { Order } from 'src/order/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("EMPLOYEE")
export class Employee extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column("varchar", {length:255})
  Name: string;

  @Column("varchar", {length:50})
  Email: string;

  @Column("varchar", {length:50})
  Address: string;
  
  @Column("varchar", {length:10})
  Phone: string;

  @Column("varchar", {length:10})
  Sex: string;
}