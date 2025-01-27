import { Producto } from "./producto";
import { ProductoDAO } from "./producto.dao";

export class ProductoDAOImpl implements ProductoDAO {
    private productos: Producto[] = [
        {
            id: 1,
            name: 'Producto 1',
            description: 'lorem lorem',
            price: 10000,
            stock: 300,
            image: 'https://i.imgur.com/U4iGx1j.jpeg',
        },
    ];
    private counterId = 1;

    obtenerTodos(): Promise<Producto[]> {
        console.log("Obteniendo todos los productos");
        return new Promise<Producto[]>(resolve => {
            resolve(this.productos);
        });
    }

    obtenerPorId(id: number): Promise<Producto | null> {
        console.log("Obteniendo producto por id");
        return new Promise<Producto | null>(resolve => {
            const producto = this.productos.find(p => p.id === id) || null;
            resolve(producto);
        });
    }

    crear(producto: Producto): Promise<Producto> {
        console.log("Creando producto");
        return new Promise<Producto>(resolve => {
            this.counterId += 1;
            const nuevoProducto = { ...producto, id: this.counterId };
            this.productos.push(nuevoProducto);
            resolve(nuevoProducto);
        });
    }

    actualizar(producto: Producto): Promise<Producto | null> {
        console.log("Actualizando producto");
        return new Promise<Producto | null>(resolve => {
            const index = this.productos.findIndex(p => p.id === producto.id);
            if (index !== -1) {
                this.productos[index] = { ...this.productos[index], ...producto };
                resolve(this.productos[index]);
            } else {
                resolve(null);
            }
        });
    }

    eliminar(id: number): Promise<void> {
        console.log("Eliminando producto");
        return new Promise<void>(resolve => {
            this.productos = this.productos.filter(p => p.id !== id);
            resolve();
        });
    }
}