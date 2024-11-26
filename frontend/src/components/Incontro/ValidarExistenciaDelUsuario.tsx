import { customAxios } from '@/axios/axios.interceptor'
import { UseCalendarStore } from '@/store/calendarStore'
import axios from 'axios'
import { FormEvent } from 'react'
import { toast } from 'sonner'
type dataFromForm = {
    email: string
    nombre: string
    celular: string
}

const ValidarExistenciaDelUsuario = () => {
    const setDataUser = UseCalendarStore(state=> state.setDataUser)
    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.currentTarget)) as dataFromForm
        if(!data.nombre){
            toast.warning('Riccioluta manca el tuo nome 😒')
        } 
        if(!data.email){
            toast.warning('Riccioluta manca el tuo email 😒')
        }     
        if(!data.celular){
            toast.warning('Riccioluta manca el tuo cellulare 😒')
        }    

        try {
            const request = await customAxios("users/" + data.email)
            if(request.status === 204){
                toast.info("Riccioluta non aviamo nessun buono per te 😒")
            }
            setDataUser(data.nombre,data.email,data.celular)
        } catch (error) {
            if(axios.isAxiosError(error)){
                toast("error")
            }            
        }
    }

    return (
    <section className=' h-full w-full items-center gap-2 justify-start px-1 pb-1 flex flex-col'>
        <div className='w-full h-full'>
            <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-between h-full gap-3   ">
                <label  htmlFor="email" className="text-sm w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    <span>Email:</span>
                    <input type="email" id="email" name="email" required className="w-full border p-2 rounded" />
                </label>
                <label htmlFor="nombre" className="text-sm font-medium w-full leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    <span>Nome:</span>
                    <input type="text" id="nombre" name="nombre" required className="w-full border p-2 rounded"/>
                </label>
                <label htmlFor="celular" className="text-sm font-medium w-full leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    <span>Cellulare:</span>
                    <input type="text" id="celular" name="celular" required className="w-full border p-2 rounded"/>
                </label>
                <button className=" border p-2 w-full bg-pink-400 rounded hover:bg-pink-600 text-white font-semibold hover:scale-105 trasition duration-200">Confirmare</button>
            </form>
        </div>
    </section>
  )
}

export default ValidarExistenciaDelUsuario