import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {




    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

           {(pacientes && pacientes.length) ? (
               <>
                 <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

                <p className="mt-5 text-lg text-center mb-7">Administra tus <span className="text-indigo-500 font-bold text-lg">Pacientes y Citas</span></p>

                {pacientes.map( (paciente) => (
                <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                />

                ))}
               </>
           ) : (
               <>
                <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>

                <p className="mt-5 text-lg text-center mb-7">Agreg tu primer <span className="text-indigo-500 font-bold text-lg">Paciente</span></p>

               </>
           )
           
           }

            


        </div>
    )
}

export default ListadoPacientes

/*function ListadoPacientes() {
    return(
        <h2>Listado Pacientes</h2>
    )
}

export default ListadoPacientes */