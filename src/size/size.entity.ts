
import { Product } from 'src/product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn, Double, ManyToMany, JoinTable } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("SIZE")
export class Size extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column("text")
  Name: string;

  @Column("text")
  Description: string;

  @ManyToMany(
    () => Product, 
    pro => pro.sizes, //optional
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinTable({
      name: 'PRODUCTDETAIL',
      joinColumn: {
        name: 'IdSize',
        referencedColumnName: 'Id',
      },
      inverseJoinColumn: {
        name: 'IdPro',
        referencedColumnName: 'Id',
      },
    })
    products?: Product[];

}