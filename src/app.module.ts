import { Module } from '@nestjs/common';

import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ImageModule } from './image/image.module';

import { Category } from './category/category.entity';
import { Product } from './product/product.entity';
import { Image } from './image/image.entity';
import { Customer } from './customer/customer.entity';
import { Order } from './order/order.entity';
import { OrderDetail } from './orderdetail/orderdetail.entity';
import { Size } from './size/size.entity';
import { ProductDetail } from './productdetail/productdetail.entity';
import { Employee } from './employee/employee.entity';
//import { ImportBill } from './importBill/importBill.entity';
import { Stock } from './stock/stock.entity';
import { ProductStock } from './productstock/productstock.entity';
import { ImportBill } from './importbill/importbill.entity';
import { ImportDetail } from './importdetail/importdetail.entity';
//import { ImportDetail } from './importdetail/importdetail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'beliy-db.mysql.database.azure.com',
      port: 3306,
      username: 'dangdo',
      password: '01259977014Do@',
      database: 'db_beliy',
      entities: [Category, Product, Size, ProductDetail, Image,
                 Customer, Order, OrderDetail, Employee, Stock,
                 ProductStock, ImportBill, ImportDetail],
      synchronize: true,
    }), CategoryModule, ProductModule, ImageModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
