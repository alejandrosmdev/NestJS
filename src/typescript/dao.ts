// Define la interfaz DAO para las operaciones.
// Metodos encapsulados com promesas
export interface DAO<T> {
    obtenerTodos(): Promise<T[]>;
    obtenerPorId(id: number): Promise<T | null>;
    crear(objeto: T): Promise<T>;
    actualizar(objeto: T): Promise<T>;
    eliminar(id: number): Promise<void>;
}