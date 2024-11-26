/* eslint-disable @typescript-eslint/no-unused-vars */
import { customAxios } from "@/axios/axios.interceptor"
import {  DataDay } from "@/types";
import { FileDown, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from 'sonner'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PDF } from "./pdf/Pdf";
const MyDates = () => {
  const [quotesByEmail,setQuotesByEmail] = useState<DataDay[]> ([])
  async function getUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));
    
    try {
      const response = await customAxios.get(`users/${data.email}`);
      if (response.status === 200 && response.data.status == 'no content') {
        toast.info('No tenemos citas agendadas con tu correo');
      } else if (response.status === 200) {
        toast.success(response.data.message);
        setQuotesByEmail(response.data.citas)
      }
    } catch (error) {
      toast.error('Hubo un problema al obtener la información');
    }
  }
  
  return (
    <section className="flex flex-col max-w-5xl items-center justify-center w-full   ">
      <section className="flex flex-col w-full mt-24 gap-4">
        <div className="flex flex-col w-full items-center justify-center  ">
            <div className="flex flex-col space-y-1.5 rounded-t-lg p-6 bg-gradient-to-r from-pink-100 to-purple-100 w-full">
              <h1 className="tracking-tight text-2xl font-semibold text-center text-gray-800 ">Controlla se hai appuntamenti nella nostra agenda</h1>
            </div>
            <form onSubmit={getUser} className="flex flex-col items-start justify-center w-full  gap-4 border rounded p-3  sm:p-8">
                <label htmlFor="email" className="flex flex-col text-lg  w-full ">
                  Email:
                  <input type="email" id="email" name="email" required className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-xl border-pink-300 focus:ring-pink-500 focus:border-pink-500"/>
                </label>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md px-8 w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transition-all duration-300">Consultare</button>
            </form>
        </div>
        {
          quotesByEmail.length == 0 ? 
            <div className="flex flex-col items-center justify-center border rounded-lg shadow-md px-4 py-6 bg-pink-100 w-full  mx-auto">
              <div className="bg-white w-full p-4 rounded-lg shadow-inner">
                <h1 className="font-semibold text-lg text-pink-700">Benvenuto su Ricciolutta!</h1>
                <p className="text-gray-700 mt-2">
                  Qui puoi visualizzare tutte le tue prossime citazioni.
                </p>
                <p className="text-gray-600 mt-2">
                  Per la prima consultazione, inserisci la tua email per verificare se hai appuntamenti disponibili.
                </p>
              </div>  
            </div>
          :
          <div className="gap-2 flex w-full flex-col">
            {quotesByEmail.map((item)=> {
              return(
                <div key={item._id} className="flex flex-col md:flex-row justify-between items-start  border p-2 w-full">
                  <div className="w-full">
                    {
                      item.disponibilidad.map(d=>{
                        return(
                          <div key={d.id} className="flex flex-col items-start w-full">
                            <p className="flex gap-1 w-full"><MapPin fill="red"/> {item.location}  </p>
                            <div className="flex gap-1 w-full">
                              <p> {item.date} </p>
                              <p>alle</p>
                              <span>{d.hour}</span> 
                            </div>
                            <div>
                              <p className="gap-1">
                                Detagli: {d.typeService}
                              </p>
                            </div>
                            <div className="flex  w-full">
                              <div  className="flex w-full flex-col">
                                <p className="flex">
                                  € Totale: {d.pricePaid} (acconto: {d.pricePaid} €)
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="w-full flex items-end justify-end">
                      <PDFDownloadLink document={<PDF quotesByEmail={item}  />} >
                      <button className="flex w-full md:max-w-40 items-center justify-center border p-1 rounded">
                        scarica <FileDown />
                      </button>
                      </PDFDownloadLink>
                    </div>
                  </div>
                </div>
              )}
            )}
          </div>
        }
        </section>
    </section>
  )
}

export default MyDates