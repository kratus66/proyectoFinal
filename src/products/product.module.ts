import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductsRepository } from "./product.repository";
import { ProductController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "../entities/product.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Product])],
    controllers:[ProductController],
    providers:[ProductService, ProductsRepository], 
    exports:[ProductsRepository]
})

export class ProductModule{}