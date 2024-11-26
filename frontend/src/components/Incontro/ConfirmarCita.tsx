import Aside from "../Aside"
import ValidarExistenciaDelUsuario from "./ValidarExistenciaDelUsuario"
import EncuestaUser from "./EncuestaUser"
import { UseCalendarStore } from "@/store/calendarStore"
import { useEffect } from "react"
import PagarCita from "./PagarCita"
import DatosCita from "./DatosCita"

const ConfirmarCita = () => {
    const resetDataUser = UseCalendarStore(state => state.deleteDataUser)
    useEffect(()=>{
        resetDataUser()
    },[resetDataUser])
    
    return (
    <div className="min-h-screen flex flex-col items-center justify-start border w-full p-2">
        <div className=" flex items-center w-full h-full grow max-w-[800px] justify-center flex-col gap-2">
            <section className="relative rounded-lg flex flex-col w-full border bg-card text-card-foreground shadow-sm  ">
            <Aside/>
                <header className="flex flex-col  px-6 pt-14 pb-4">
                    <h3 className="font-semibold tracking-tight text-xl text-pink-500">¡Riccioluta! siamo all'ultimo passaggio, conferma i tuoi dati</h3>
                    <p className="text-gray-600" data-id="5">Così posiamo vedere se hai buono di sconto</p>
                </header>
                <div className="p-6 pt-0 grid md:grid-cols-2 gap-8">
                    <ValidarExistenciaDelUsuario />
                    <EncuestaUser />
                </div>
            </section>
            <DatosCita/>
            <section className=' rounded-lg border w-full bg-card text-card-foreground shadow-sm p-6'>
                <PagarCita />
            </section>
        </div>

    </div>
    )
}

export default ConfirmarCita