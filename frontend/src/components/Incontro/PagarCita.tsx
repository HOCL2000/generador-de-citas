import 'dayjs/locale/it'; 
import Precio from "./Precio";
import { UseCalendarStore } from "@/store/calendarStore";
import PaypalButtonTotalPrice from "../buttonsPaypal/PaypalButtonTotalPrice";
import PaypalButtonAbono from "../buttonsPaypal/PaypalButtonAbono";
import { useEffect } from "react";
import { motion } from "framer-motion";

const PagarCita = () => {
    const abono = UseCalendarStore((state) => state.abono);
    
    const nameUser = UseCalendarStore(state=> state.nameUser)
    const emailUser = UseCalendarStore(state=> state.emailUser)
    const numberUser = UseCalendarStore(state=> state.numberUser)
    const paquete = UseCalendarStore((state) => state.paquete);
    const precio = UseCalendarStore((state) => state.priceData);

    useEffect(()=>{
    },[abono])
    
    return (
        <section className=" flex flex-col md:flex-row text-start h-full  items-center md:justify-evenly justify-center w-full rounded   ">
            <motion.div className="flex flex-col rounded w-full items-center justify-center">
                {nameUser && emailUser && numberUser && paquete ?
                <div className='pt-2 max-w-[600px] w-full '>
                    <h3 className="font-semibold tracking-tight text-xl" >Riepilogo dell'ordine</h3>
                    <section className="w-full mb-4 rounded-lg border  text-card-foreground shadow-sm bg-gray-50">
                        <div className='p-4 space-y-4'>
                        <div className="flex justify-between items-center" >
                            <span className="font-medium" >Cliente:</span>
                            <span > {nameUser} </span>
                        </div>
                        <div className="flex justify-between items-center" >
                            <span className="font-medium" >Servizio:</span>
                            <span > {paquete} </span>
                        </div>
                        <div className="flex justify-between items-center" >
                            <span className="font-medium" >Deposito minimo:</span>
                            <span className="text-pink-500 font-semibold" > 50 €</span>
                        </div>

                        <div className="flex justify-between items-center" >
                            <span className="font-bold" >Totale:</span>
                            <span className="text-pink-500 font-semibold" > {precio} €</span>
                        </div>
                        </div>
                    </section>
                    <div className="w-full">
                        <Precio/>
                        {abono ? 
                        <div className="w-full gap-3 ">
                            <div className="flex justify-between items-center" >
                                <span className="font-bold" >Acconto:</span>
                                <span className="text-pink-500 font-semibold" > {precio} €</span>
                            </div>
                            <PaypalButtonTotalPrice/>
                        </div>

                        :
                        <div className="w-full ">
                            <div className="flex justify-between items-center" >
                                <span className="font-bold" >Acconto:</span>
                                <span className="text-pink-500 font-semibold" > 50 € </span>
                            </div>
                            <PaypalButtonAbono/>
                        </div>
                        }
                    </div>
                </div>
                :
                <div className="pt-2 space-y-4" >
                    <h3 className="text-2xl font-semibold leading-none tracking-tight" >Pagamenti</h3>

                    <p className="text-gray-600" >Riccioluta! 😊, Per favore, completa i dati del modulo per abilitare la sezione dei pagamenti. Questi dati sono necessari per identificare la persona che effettua il pagamento e per memorizzare correttamente le informazioni. Non dimenticare di selezionare anche il servizio, poiché è necessario.</p>
                    <div className="bg-pink-50 p-4 rounded-lg" >
                        <p className="font-medium" >Prezzo minima: 50€</p><p className="text-sm text-gray-600" >minimo per poter prenotare l'appuntamento</p>
                    </div>
                </div>
                }
            </motion.div>
        </section>
    )
}

export default PagarCita
