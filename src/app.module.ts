import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CancionesController } from './controllers/canciones/canciones.controller';
import { ThreadsController } from './controllers/threads/threads.controller';
import { ProductsService } from './services/products/products.service';
import { ProductoDAOImpl } from './typescript/producto/producto.dao.impl';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, BrandsController, CancionesController, ThreadsController],
  providers: [AppService, ProductsService, ProductoDAOImpl],
})
export class AppModule {}
