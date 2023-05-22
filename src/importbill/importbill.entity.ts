import { Stock } from 'src/stock/stock.entity';
import { ProductDetail } from 'src/productdetail/productdetail.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, ManyToMany, JoinTable, Double } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ProductStock } from 'src/productstock/productstock.entity';

@Entity("IMPORTBILL")
export class ImportBill extends BaseEntity  {

  @PrimaryGeneratedColumn('uuid')
  Id: string; 

  @Column("text")
  NameSupplier: string;

  @Column("text")
  Date: string;

  @ManyToMany(
    () => ProductStock, 
    pro => pro.imports, //optional
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinTable({
      name: 'IMPORTDETAIL',
      joinColumn: {
        name: 'IdImport',
        referencedColumnName: 'Id',
      },
      inverseJoinColumn: {
        name: 'IdProStock',
        referencedColumnName: 'Id',
      },
    })
    products?: ProductStock[];

    @Column("double")
    TotalValue: Double;
}