import React, { useEffect } from "react";
import { reqResApi } from "../API/reqRes";
import { ReqResListado, Usuario } from "../Interfaces/ReqResInterface";
import { useState } from 'react';

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(()=>{
    //API CALL
    reqResApi.get<ReqResListado>('/users')
    .then((res)=>{
      setUsuarios(res.data.data)
    })
    .catch();
  },[]);

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
    </div>
    );
};

export default Usuarios;
