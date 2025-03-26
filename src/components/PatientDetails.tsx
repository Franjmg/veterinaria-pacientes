import { toast } from "react-toastify"
import { usePatientStore } from "../store/store"
import { Patient } from "../types"
import PatientDataItem from "./PatientDataItem"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {

    const deletePatient = usePatientStore( state => state.deletePatient)
    const getPatientById = usePatientStore( state => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast('Paciente Eliminado Correctamente', {type: 'error'})
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDataItem label="id" data={patient.id} />
            <PatientDataItem label="name" data={patient.name} />
            <PatientDataItem label="propietario" data={patient.caretaker} />
            <PatientDataItem label="email" data={patient.email} />
            <PatientDataItem label="date" data={patient.date.toString()} />
            <PatientDataItem label="symptoms" data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleClick}
                >Eliminar
                </button>
            </div>
        </div>
    )
}
