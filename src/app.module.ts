import { Module } from '@nestjs/common';
import { AppDataSource } from './Config/typeorm';
import { UserModule } from '../src/user/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProductModule } from './products/product.module';
/* import { ConfigModule } from '@nestjs/common' */
@Module({
  imports: [UserModule, ProductModule,
        TypeOrmModule.forRoot(AppDataSource.options), ],
  controllers: [],
  providers: [],
})
export class AppModule {}