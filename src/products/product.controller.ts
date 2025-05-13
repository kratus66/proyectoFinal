import { Controller } from "@nestjs/common";
import { Get, Param } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { ProductResponseDto } from "../DTO/ProductResponseDto";
import { ProductService } from "./product.service";

@Controller()
export class ProductController{
    constructor(private readonly productService: ProductService){
        
    }

    @Get(':id')
    @ApiResponse({ type: ProductResponseDto })
    async getProduct(@Param('id') id: number): Promise<ProductResponseDto> {
    const product = await this.productService.getProductId(id);
    return plainToInstance(ProductResponseDto, product);
    }
}