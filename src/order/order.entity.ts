import { Customer } from 'src/customer/customer.entity';
import { Employee } from 'src/employee/employee.entity';
import { Product } from 'src/product/product.entity';
import { ProductDetail } from 'src/productdetail/productdetail.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, ManyToOne, JoinColumn, Double, ManyToMany, JoinTable } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("ORDER")
export class Order extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column("text")
  OrdeDate: string;

  @Column("text")
  Status: string;

  @Column("text")
  PaymentDate: string;

  @Column("text")
  PaymentMethod: string;

  @Column("double")
  TotalValue: Double;

  @Column("text")
  DeliveryAddress: string;
  
  @ManyToOne(() => Customer, (cus) => cus.Id)
  @JoinColumn() 
  public cus!: Customer;

  @ManyToMany(
    () => ProductDetail, 
    pro => pro.orders, //optional
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinTable({
      name: 'ORDERDETAIL',
      joinColumn: {
        name: 'IdOrder',
        referencedColumnName: 'Id',
      },
      inverseJoinColumn: {
        name: 'IdProDetail',
        referencedColumnName: 'Id',
      },
    })
    products?: ProductDetail[];

}