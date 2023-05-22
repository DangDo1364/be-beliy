import { Category } from 'src/category/category.entity';
import { Image } from 'src/image/image.entity';
import { ImportBill } from 'src/importbill/importbill.entity';
import { Order } from 'src/order/order.entity';
import { Size } from 'src/size/size.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn, Double, ManyToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("PRODUCT")
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column("varchar", {length:255})
  Name: string;

  @ManyToOne(() => Category, (cat) => cat.Id)
  @JoinColumn() 
  public cat!: Category;

  @Column("double")
  Price: Double;
  
  @Column("text")
  Description: string;
  
  @Column("double")
  Discount: Double;

  @Column("double")
  SaleRate: Double;

  @OneToMany(type => Image, img => img.pro)
  images: Image[];

  @ManyToMany(
    () => Size,
    size => size.products,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  sizes?: Size[];
 
}