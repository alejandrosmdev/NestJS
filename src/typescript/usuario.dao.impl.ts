import { Usuario } from "./usuario";
import { UsuarioDAO } from "./usuario.dao";

export class UsuarioDAOImpl implements UsuarioDAO {
    private usuarios: Usuario[] = [
        { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
        { id: 2, nombre: 'Ana Gómez', email: 'ana@example.com' }
      ];
    
      async obtenerTodos(): Promise<Usuario[]> {
        // Simulamos una operación asincrónica, como una consulta a la base de datos.
        return new Promise(resolve => {
          setTimeout(() => resolve(this.usuarios), 1000);
        });
      }
    
      async obtenerPorId(id: number): Promise<Usuario | null> {
        // Simulamos una operación asincrónica.
        return new Promise(resolve => {
          setTimeout(() => {
            const usuario = this.usuarios.find(usuario => usuario.id === id) || null;
            resolve(usuario);
          }, 1000);
        });
      }
    
      async crear(usuario: Usuario): Promise<Usuario> {
        // Simulamos una operación asincrónica.
        return new Promise(resolve => {
          setTimeout(() => {
            this.usuarios.push(usuario);
            resolve(usuario);
          }, 1000);
        });
      }
    
      async actualizar(usuario: Usuario): Promise<Usuario> {
        // Simulamos una operación asincrónica.
        return new Promise(resolve => {
          setTimeout(() => {
            const index = this.usuarios.findIndex(u => u.id === usuario.id);
            if (index !== -1) {
              this.usuarios[index] = usuario;
            }
            resolve(usuario);
          }, 1000);
        });
      }
    
      async eliminar(id: number): Promise<void> {
        // Simulamos una operación asincrónica.
        return new Promise(resolve => {
          setTimeout(() => {
            this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
            resolve();
          }, 1000);
        });
      }

}