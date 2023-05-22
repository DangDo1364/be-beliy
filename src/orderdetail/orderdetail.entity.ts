import { Customer } from 'src/customer/customer.entity';
import { Order } from 'src/order/order.entity';
import { Product } from 'src/product/product.entity';
import { ProductDetail } from 'src/productdetail/productdetail.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn, Double, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("ORDERDETAIL")
export class OrderDetail extends BaseEntity {

  @PrimaryColumn({ name: 'IdOrder' })
  IdOrder: string;

  @PrimaryColumn({ name: 'IdProDetail' })
  IdPro: string;

  @ManyToOne(
    () => Order,
    order => order.products,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'IdOrder', referencedColumnName: 'Id' }])
  orders: Order[];

  @ManyToOne(
    () => ProductDetail,
    product => product.orders,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'IdProDetail', referencedColumnName: 'Id' }])
  products: ProductDetail[];

  @Column("int")
  Quantity: number;

  @Column("double")
  Price: Double;

}