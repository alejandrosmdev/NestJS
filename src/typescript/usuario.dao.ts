import { DAO } from "./dao";
import { Usuario } from "./usuario";

// Define la interfaz DAO para las operaciones.
// Metodos encapsulados com promesas
export interface UsuarioDAO extends DAO<Usuario>{
    obtenerTodos(): Promise<Usuario[]>;
    obtenerPorId(id: number): Promise<Usuario | null>;
    crear(usuario: Usuario): Promise<Usuario>;
    actualizar(usuario: Usuario): Promise<Usuario>;
    eliminar(id: number): Promise<void>;
  }