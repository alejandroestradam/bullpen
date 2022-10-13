import { Usuario } from "../Interfaces/ReqResInterface";
import { useUsuarios } from "../hooks/useUsuarios";

const Usuarios = () => {

  const {usuarios, cargarUsuarios} = useUsuarios();


  const renderItem = (usuario: Usuario) =>{
    return (
      <tr key={usuario.id}>
        <td>
          <img src={usuario.avatar} alt="avatar" style={{width: 35, borderRadius: 100}}/>
        </td>
        <td>{usuario.first_name} {usuario.last_name}</td>
        <td>{usuario.email}</td>
      </tr>
    )
  }

  return (
    <div>
      <br />
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => renderItem(usuario))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={()=>cargarUsuarios(false)}>Anteriores</button>
      &nbsp;
      <button className="btn btn-primary" onClick={()=>cargarUsuarios(true)}>Siguientes</button>
    </div>
    );
};

export default Usuarios;
