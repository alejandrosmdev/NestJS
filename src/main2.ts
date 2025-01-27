// instrucciones 
// 
    //npm install -g typescript
    //npx ts-node main1.ts
    // main2.ts en el raiz
  
import { Usuario} from './typescript/usuario';
import { UsuarioDAO} from './typescript/usuario.dao';
import { UsuarioDAOImpl} from './typescript/usuario.dao.impl';

const usuarioDAO: UsuarioDAO = new UsuarioDAOImpl();

async function trabajarConUsuarios() {
  // Obtener todos los usuarios
  const usuarios = await usuarioDAO.obtenerTodos();
  console.log('Usuarios:', usuarios);

  // Obtener un usuario por ID
  const usuario = await usuarioDAO.obtenerPorId(1);
  console.log('Usuario encontrado:', usuario);

  // Crear un nuevo usuario
  const nuevoUsuario = await usuarioDAO.crear({ id: 3, nombre: 'Laura Martínez', email: 'laura@example.com' });
  console.log('Nuevo usuario:', nuevoUsuario);

  // Actualizar un usuario
  const usuarioActualizado = await usuarioDAO.actualizar({ id: 3, nombre: 'Laura Martínez', email: 'laura.mtz@example.com' });
  console.log('Usuario actualizado:', usuarioActualizado);

  // Eliminar un usuario
  await usuarioDAO.eliminar(3);
  console.log('Usuario eliminado');

  // Verificar usuarios restantes
  const usuariosRestantes = await usuarioDAO.obtenerTodos();
  console.log('Usuarios restantes:', usuariosRestantes);
}

trabajarConUsuarios();