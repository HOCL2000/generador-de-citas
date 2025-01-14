import { UseCalendarStore } from '@/store/calendarStore';
import { useEffect, useState } from 'react';
import { DayConfirm, Disponibilidad } from '@/types';
import { toast, Toaster } from 'sonner';
import { createPortal } from 'react-dom'
import Swal from 'sweetalert2'
import dayjs from 'dayjs';
import withReactContent from 'sweetalert2-react-content'
import 'dayjs/locale/it'; 
import {AnimatePresence , motion} from 'framer-motion'

const ConfirmarEvento = () => {
    dayjs.locale('it');
    const daySelectedByUser = UseCalendarStore(state=> state.dayselectedByUser)
    console.log(daySelectedByUser);
    
    const confirmarEvento = UseCalendarStore(state => state.setDayConfirm)
    const [selectHour , setSelectHour] = useState <Disponibilidad[]> ([])
    const urlLocation = location.href.split("/")[3]
    const ubicacion = urlLocation === 'incontrosbt'? 'Sam Benedetto':  "Pescara"    
    const [swalShown, setSwalShown] = useState(false)
    const showSwal = () => {
        Swal.fire({
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Confirmare",
            cancelButtonText: "Cancelare",
            didOpen: () => {
                setSwalShown(true);
            },
            didClose: () => {
                setSwalShown(false);
            },
        }).then((result) => {
            if (result.isConfirmed) {
                let eventoConfirmado: DayConfirm | undefined
                if (daySelectedByUser?.date && selectHour[0]?.hour) {
                    eventoConfirmado = {
                      date: daySelectedByUser.date,
                      location: ubicacion, 
                      hour: selectHour[0].hour,
                    };
                    confirmarEvento(eventoConfirmado);
                } 
                withReactContent(Swal).fire({
                    icon: "success",
                    html: <h3 className='font-bold'>Ti reindirizzeremo per finalizzare l'appuntamento</h3>,
                    showConfirmButton: false
                });
                setTimeout(()=>{
                    location.href = "confirmare-apputamenti"
                },3000)
            }
            if(!result.isConfirmed){
                toast.warning("Hai annullato l'appuntamento")
            }
        });
    }
    
    const formatDate = (dateString:string) => {
        return dayjs(dateString).format('dddd, D MMMM');
    };

    async function newEvent() {
        if(selectHour.length === 0){
            toast.info("Per continuare seleziona un orario disponibile.")
            return
        }
        showSwal()
    }

    const userSelectHour = (item: Disponibilidad) =>{
        setSelectHour([item])
    }

    useEffect(()=>{
        setSelectHour([])
    },[daySelectedByUser])
    return (
    <section className='  w-full items-start  h-full '>
        <AnimatePresence mode="wait">
        {daySelectedByUser &&    
        <motion.div 
        key={daySelectedByUser.date}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className='grid grid-rows-[auto,1fr,auto]    w-full  h-full '>
        <div className='flex w-full  justify-center items-center gap-2'>
            <h1 className='flex text-lg font-semibold'> 
                <span>Giorno selezionato:</span>
            </h1>
            <motion.h2>
                <span className='font-bold text-lg'> {daySelectedByUser?.date} </span> ✅ 
            </motion.h2>
        </div>
        <section className='flex flex-col md:flex-row w-full mt-1'>
        <div className='flex flex-col w-full  gap-2 mx-1 items-center justify-center flex-wrap '>
            {
                daySelectedByUser?.disponibilidad.map((item)=>{
                    if(!item.user){
                        return(
                            <button key={item.hour + "s"} className={`p-2 border rounded  transition-all duration-300 hover:border-blue-800 w-full  ${selectHour[0]?.hour == item.hour ? "border border-blue-800 " : ""} `} onPointerDown={()=> userSelectHour(item)}> 
                                {item.hour}
                            </button>
                        )
                    }
                })
            }
        </div>  
        <div className='flex flex-col w-full  items-center justify-center'>
            <h2 className='font-semibold'>Orario selezionato</h2>
            {
                selectHour.length > 0 ?
                <div>
                    {
                        selectHour?.map((item)=>{
                            return(
                                <button key={item.hour} className='p-4 border rounded border-green-300 transition-all duration-300 hover:border-green-800' onPointerDown={()=> userSelectHour(item)}> 
                                    {item.hour} ✅
                                </button>
                            )
                        })
                    }
                </div>
                :
                <div className='text-center' >
                    <h2 className='text-red-500 custom-text-shadow-red text-lg my-4'>Nessun orario selezionato</h2>
                </div>
            }
        </div>  
        </section>
        <div className='flex  w-full items-center justify-center '>
            <div className='flex   rounded m-1 items-center justify-between w-full'>

                <div className='w-full items-center justify-center flex h-full'>
                    <button className='p-3 w-full border rounded transition-all duration-500 bg-[#00D26A] hover:bg-[#6dff2f] text-white' onClick={newEvent}>Confirmare</button>
                </div>
            </div>
        </div>
        <Toaster richColors/>
        {swalShown &&
        createPortal(
            <div>
                <h2 className='font-bold text-blue-950 text-2xl'>Confermare i dati</h2>
                <div>
                    <p> Salone: <span className='font-bold'>{daySelectedByUser?.location === 'sambenedetto' ? 'Sam Benedetto': 'Pescara'}</span>  </p>
                    {
                        daySelectedByUser &&
                        <p>Data: <span className='font-bold'>{formatDate(daySelectedByUser?.date)}</span>  alle <span className='font-bold'>{ selectHour[0].hour} </span>  </p>
                    }
                </div>
            </div>,
            Swal.getHtmlContainer()!
        )}
        </motion.div>
        }
        </AnimatePresence>
    </section>
  )
}

export default ConfirmarEvento