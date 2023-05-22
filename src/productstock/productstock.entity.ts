import { ImportBill } from 'src/importbill/importbill.entity';
import { Order } from 'src/order/order.entity';
import { ProductDetail } from 'src/productdetail/productdetail.entity';
import { Stock } from 'src/stock/stock.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn, Double, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("PRODUCTSTOCK")
export class ProductStock extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ name: 'IdStock' })
  IdOrder: string;

  @Column({ name: 'IdProDetail' })
  IdPro: string;

  @ManyToOne(
    () => Stock,
    st => st.products,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'IdStock', referencedColumnName: 'Id' }])
  orders: Order[];

  @ManyToOne(
    () => ProductDetail,
    product => product.stocks,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'IdProDetail', referencedColumnName: 'Id' }])
  products: ProductDetail[];

  @Column("int")
  Quantity: number;

  @Column("double")
  Price: Double;

  @ManyToMany(
    () => ImportBill,
    imp => imp.products,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  imports: ImportBill[];
}