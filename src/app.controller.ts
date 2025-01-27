import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  // Inyección de dependencia --> Gestiona automáticamente la instancia
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("new-point")
  getNewEndpoint(): string {
    return "new endpoint";
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }) {
    return `Product ${productId}, Category ${categoryId}`;
  }

}
