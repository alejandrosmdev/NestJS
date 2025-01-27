import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  @Get(':categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }) {
    return `Product ${productId}, Category ${categoryId}`;
  }
  // http://localhost:3000/categories/2/products/2

}
