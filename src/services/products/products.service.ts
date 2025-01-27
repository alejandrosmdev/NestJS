import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductoDAOImpl } from 'src/typescript/producto/producto.dao.impl';

@Injectable() // Anotación inyectable --> Inyección de dependencias
export class ProductsService {
  constructor(private productDaoImpl:ProductoDAOImpl){}
    // private counterId = 1;
    // private products: Product[] = [
    //   {
    //     id: 1,
    //     name: 'Producto 1',
    //     description: 'lorem lorem',
    //     price: 10000,
    //     stock: 300,
    //     image: 'https://i.imgur.com/U4iGx1j.jpeg',
    //   },
    // ];

    findAll() {
        return this.productDaoImpl.obtenerTodos();
    }

    findOne(id: number) {
        // const product = this.products.find((item) => item.id === id);
        // if(!product){
        //           const message = `${id} not found`;
        //           console.log(message); // Salida: "42 not found"
        //           throw new NotFoundException(`Product ${id} not found`);
        // }
        //  return product;
         //return this.products.find((item) => item.id === id);
         return this.productDaoImpl.obtenerPorId(id);
    }

    create(newProducto: any) {
        // this.counterId += 1;
        // const newProduct = {
        //     id: this.counterId,
        //     ...newProducto,
        // };
        // this.products.push(newProduct);
        // return newProduct;
        return this.productDaoImpl.crear(newProducto);
    }

    update(id: number, payload: any) {
        // const productFound = this.findOne(id);
        // let message = '';
        // if (productFound != null) {
        //     const index = this.products.findIndex((item) => item.id === id);
        //                         // Hacer un merge entre los dos
        //                         // Haz esta prueba si te da tiempo
        //                             // this.products[index] = payload;
        //   this.products[index] = {
        //         ...productFound,
        //         ...payload,
        //   }
        //   message = 'Product updated';
        // } else {
        //   message = 'Product not found';
        // }
        // return message;
        return this.productDaoImpl.actualizar(payload);
    }


}
