import { Product } from 'src/product/product.entity';
import { ImportBill } from 'src/importbill/importbill.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn, Double, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ProductStock } from 'src/productstock/productstock.entity';

@Entity("IMPORTDETAIL")
export class ImportDetail extends BaseEntity {

  @PrimaryColumn({ name: 'IdImport' })
  IdImport: string;

  @PrimaryColumn({ name: 'IdProStock' })
  IdPro: string;  

  @ManyToMany(
    () => ImportBill,
    imp => imp.products,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  imports?: ImportBill[];

  @ManyToMany(
    () => ProductStock,
    stock => stock.products,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  stocks?: ProductStock[];

  @Column("int")
  Quantity: number;
   
  @Column("double")
  Price: Double;
}