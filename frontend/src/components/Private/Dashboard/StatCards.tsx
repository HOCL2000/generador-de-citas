import { DataDay } from '@/types'
import { Gem, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Calendar } from "lucide-react"
import { customAxiosAdmin } from '@/axios/axios.interceptor'

export const StatCards = () => {
    const [diasAgendados,setDiasAgendados] = useState <number> (0)
    const [periodoDiasAgendados,setPeriodoDiasAgendados] = useState <string> ('')
    const [usuariosAgendados,setUsuariosAgendados] = useState <number> (0)
    const [totalIngresos,setTotalIngresos] = useState <string> ('')
    
    const getDataDay = async () =>{
        try {
            const request = await customAxiosAdmin.get("administracion/day",{
              headers:{
                "Content-Type": "application/json"
              },
              withCredentials: true
            })
            
            if(request.status === 200){
            const days: DataDay[] = request.data.days;
            setDiasAgendados(days.length)
            const totalUsuario = days.reduce((acc, day) => {
                return acc + day.disponibilidad.filter(item => item.user != null).length;
            }, 0);
            const totalPrecio = days.reduce((acc, day) => {
            return acc + day.disponibilidad
              .filter(item => item.user != null && item.pricePaid != null)              
              .reduce((sum, item) => sum + parseFloat(item.pricePaid), 0); 
            }, 0);
            setTotalIngresos(`${totalPrecio} € `)                  
            setUsuariosAgendados(totalUsuario)
            setPeriodoDiasAgendados(`dalle ${days[0].date} alle ${days[days.length - 1].date}`)
            }
          } catch (error) {
            console.log(error);
          }
        }

    useEffect(()=>{
        getDataDay()
    },[])


    return (
    <>
        <Card title='Giornate previste per i prossimi tre mesi' value={diasAgendados.toString()} period={periodoDiasAgendados} icon={<Gem className='text-blue-400'/>} />
        <Card title='Numero di utenti per i prossimi 3 mesi' value={usuariosAgendados.toString()} period={periodoDiasAgendados} icon={<Star className='text-yellow-400' />} />
        <Card title='Importo del reddito del periodo' value={totalIngresos.toString()} period={periodoDiasAgendados} icon={<Calendar className='text-red-600' />}/>
    </>
  )
}


const Card = ({title,value, period, icon}: {title:string,value:string, period: string, icon: React.ReactNode}) => {
    return (
        <div className='p-4  col-span-4 rounded border shadow border-stone-300' >
            <div className='flex flex-col w-full items-start justify-between'>
                <div className='w-full'>
                    <div className='text-stone-800 mb-2 text-sm flex flex-wrap items-center justify-between w-full'> 
                        <h3>{title}</h3> 
                        {icon}  
                    </div>
                    <p className='text-3xl font-semibold'> {value} </p>
                </div>
                <p className='text-xs text-[#0D1E4C]'> {period} </p>
            </div>
        </div>
    )
}