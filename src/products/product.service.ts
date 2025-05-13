import { Get, Injectable } from "@nestjs/common";
import { ProductsRepository } from "./product.repository";
import { ProductResponseDto } from "src/DTO/ProductResponseDto";

@Injectable()
export class ProductService{
    constructor(private readonly productRepository: ProductsRepository){
        
    }
    
    async getProductId(id:number):Promise<ProductResponseDto>{
        return await this.productRepository.getProductId(id);
         
    }
}