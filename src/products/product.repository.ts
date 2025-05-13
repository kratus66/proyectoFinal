import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import {Product} from '../entities/product.entity'
import { plainToInstance } from "class-transformer";
import { ProductResponseDto } from "src/DTO/ProductResponseDto";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProductsRepository{
    
    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product>){

    }
    async getProductId(id:number):Promise<ProductResponseDto>{
        const product = await this.productRepo.findOne({where:{id}, relations:['classRef', 'submissions']})
         

        return plainToInstance(ProductResponseDto, product)








        





    }
}