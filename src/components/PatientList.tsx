import { usePatientStore } from "../store/store"
import PatientDetails from "./PatientDetails"

export default function PatientList() {

    const patients = usePatientStore((state) => state.patients)
    
    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {patients.map( patient => (
                        <PatientDetails
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>
            ) : (
                <>
                <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                <p className="text-lg mt-5 text-center mb-10">
                    Comienza agregando Pacientes {''}
                    <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                </p>
                </>
            )}
        </div>
    )
}
