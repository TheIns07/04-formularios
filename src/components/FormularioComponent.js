import React, { useState } from 'react'

export const FormularioComponent = () => {
  const [usuario, setUsuario] = useState({});

  const conseguirDatosForm = e => {
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.value
    }
    setUsuario(usuario);
  }
  const cambiarDatos = e => {
    let input_name = (e.target.name);
    let user_modify = usuario;

    //user_modify[input_name] = e.target.value;
    setUsuario(previous_state => ({

        ...previous_state,
        [input_name]: e.target.value
      
    }));
  }

  return (
    <div>
        <h1>Formularios con react</h1>
        {usuario.enviar&& 
          (<div className='infoUser'>
          El nombre es {usuario.nombre} {usuario.apellido} y su genero es {usuario.genero}
          y su biografia es {usuario.bio}
         </div>)
        }

        <form onSubmit={conseguirDatosForm}>
          <div className='inputs'>
          <input type = "text" 
          placeholder='Nombre'
          name = "nombre"
          onChange= {cambiarDatos}
          />
  
          <input 
          type = "text" 
          placeholder='Apellido'
          name = "apellido"
          onChange= {cambiarDatos}
          />
          </div>
          
          <select name ="genero" onChange= {cambiarDatos}>
            <option value ="hombre">Hombre</option>
            <option value ="mujer">Mujer</option>
          </select>
          <textarea placeholder='Biografia' onChange= {cambiarDatos} name ="bio"></textarea>

          <input type = "submit" value = "Enviar" name = "enviar"/>
        </form>
    </div>
  )
}
