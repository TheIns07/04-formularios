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
      bio: datos.bio.value
    }
    setUsuario(usuario);
  }

  return (
    <div>
        <h1>Formularios con react</h1>
        {usuario.bio && usuario.bio.length >= 1 && 
          (<div className='infoUser'>
          El nombre es {usuario.nombre} {usuario.apellido} y su genero es {usuario.genero}
          y su biografia es {usuario.bio}
         </div>)
        }

        <form onSubmit={conseguirDatosForm}>
          <div className='inputs'>
          <input type = "text" 
          placeholder='Nombre'
          name = "nombre"/>
  
          <input 
          type = "text" 
          placeholder='Apellido'
          name = "apellido"
          />
          </div>
          
          <select name ="genero">
            <option value ="hombre">Hombre</option>
            <option value ="mujer">Mujer</option>
          </select>
          <textarea placeholder='Biografia' name ="bio"></textarea>

          <input type = "submit" value = "Enviar"/>
        </form>
    </div>
  )
}
