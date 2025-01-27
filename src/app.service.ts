import { Injectable } from '@nestjs/common';
import { ProductoDAOImpl } from './typescript/producto/producto.dao.impl';

@Injectable()
export class AppService {
  constructor(private readonly productDaoImpl: ProductoDAOImpl) {}
  getHello(): string {
    return 'Hello World!';
  }
}
