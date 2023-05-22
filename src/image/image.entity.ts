import { Product } from 'src/product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("IMAGE")
export class Image extends BaseEntity  {

  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @ManyToOne(() => Product, (pro) => pro.Id)
  @JoinColumn({name:"IdPro"}) 
  public pro!: Product;

  @Column("text")
  Link: string;

}