import { Producto } from './producto';
import { DAO } from '../dao';

// Define la interfaz DAO para las operaciones.
// Metodos encapsulados com promesas
export interface ProductoDAO extends DAO<Producto>{
    obtenerTodos(): Promise<Producto[]>;
    obtenerPorId(id: number): Promise<Producto | null>;
    crear(producto: Producto): Promise<Producto>;
    actualizar(producto: Producto): Promise<Producto>;
    eliminar(id: number): Promise<void>;
}