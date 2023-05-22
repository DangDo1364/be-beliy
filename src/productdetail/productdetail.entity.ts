import { Customer } from 'src/customer/customer.entity';
import { ImportBill } from 'src/importbill/importbill.entity';
import { Order } from 'src/order/order.entity';
import { Product } from 'src/product/product.entity';
import { Size } from 'src/size/size.entity';
import { Stock} from 'src/stock/stock.entity';


import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn, Double, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("PRODUCTDETAIL")
export class ProductDetail extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ name: 'IdSize' })
  IdSize: string;

  @Column({ name: 'IdPro' })
  IdPro: string;  

  @ManyToMany(
    () => Order,
    order => order.products,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  orders?: Order[];

  @Column("int")
  Quantity: number;
   
  @ManyToMany(
    () => Stock,
    stock => stock.products,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  stocks?: Stock[];

}