import { useEffect } from "react";


const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
const {nombre, propietario, email, fecha, sintomas, id} = paciente;

const handleEliminar = () => {
  const respuesta = confirm('Desea eliminar este paciente?');
  if(respuesta){
    eliminarPaciente(id)
  }
}

  return (
  <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gr uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>

    <p className="font-bold mb-3 text-gr uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>

    <p className="font-bold mb-3 text-gr uppercase">E-mail: <span className="font-normal normal-case">{email}</span></p>

    <p className="font-bold mb-3 text-gr uppercase">Alta: <span className="font-normal normal-case">{fecha}</span></p>

    <p className="font-bold mb-3 text-gr uppercase">Síntomas: <span className="font-normal normal-case">{sintomas}</span></p>

    <div className="flex justify-between">
      <button
      type="button"
      className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md"
      onClick={() => setPaciente(paciente)}>
        Editar
      </button>

      <button
      type="button"
      className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md"
      onClick={handleEliminar}
      >Eliminar
      </button>
    </div>

  </div>
  )
}

export default Paciente
