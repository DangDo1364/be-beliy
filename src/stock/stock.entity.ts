import { ImportBill } from 'src/importbill/importbill.entity';
import { ProductDetail } from 'src/productdetail/productdetail.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn, Double, ManyToMany, JoinTable } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("STOCK")
export class Stock extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column("text")
  Name: string;

  @Column("text")
  Address: string;
 
  @ManyToMany(
    () => ProductDetail,
    pro => pro.stocks,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  @JoinTable({
    name: 'PRODUCTSTOCK',
    joinColumn: {
      name: 'IdStock',
      referencedColumnName: 'Id',
    },
    inverseJoinColumn: {
      name: 'IdProDetail',
      referencedColumnName: 'Id',
    },
  })
  products?: ProductDetail[];
 
}