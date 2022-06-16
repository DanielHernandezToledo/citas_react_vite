import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
   
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }

  }, [paciente])

  const generarId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Validar Formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('faltan datos');
      setError(true);
      return;
    }
    setError(false);

    //OBJETO DE PACIENTE 
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if (paciente.id) {
      //Editando Registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map ( pacienteState => pacienteState.id === paciente.id ?
        objetoPaciente : pacienteState);

        setPacientes(pacientesActualizados);
        setPaciente({});
    } else {
      //Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //console.log(objetoPaciente);


    // Reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }
  return (
    <div className="md:w-1/2 lg:2/5 mb-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="mt-5 text-lg text-center mb-7">Añade Pacientes y <span className="text-indigo-500 font-bold text-lg">Administralos</span></p>

        <form
         className="bg-white shadow-md rounded-lg py-10 px-5"
          onSubmit={handleSubmit}
        >
        {error && <Error mensaje="Todos los campos son obligatorios"/>} 
          <div className="mb-2">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold mb-1">Nombre Mascota</label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
              value={nombre}
              onChange = { (e) => setNombre(e.target.value) }
              />
          </div>

          <div className="mb-2">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold mb-1">Nombre Propietario</label>
            <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            value={propietario}
            onChange = { (e) => setPropietario(e.target.value) }
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold mb-1">E-mail</label>
            <input
            id="email"
            type="email"
            placeholder="E-mail del Propietario"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            value={email}
            onChange = { (e) => setEmail(e.target.value) }
            />
          </div>

          <div className="mb-2">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold mb-1">Fecha de Alta</label>
            <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            value={fecha}
            onChange = { (e) => setFecha(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold mb-1">Síntomas</label>
            <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-w placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange = { (e) => setSintomas(e.target.value) }
            />
          </div>

          <input type="submit"
          className="bg-indigo-500 p-3 text-white rounded-md w-full hover:bg-indigo-700 cursor-pointer transition-all"
          value={ paciente.id ? 'Editar paciente' : 'Agregar Paciente'}/>
        </form>
    </div>

  )
}

export default Formulario;