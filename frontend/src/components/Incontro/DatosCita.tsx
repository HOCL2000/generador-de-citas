import { UseCalendarStore } from '@/store/calendarStore';
import dayjs from 'dayjs';
import { CalendarCheck, GeoLocationSalon, Reloj } from "../Icons";


const DatosCita = () => {
    const dayConfirmed = UseCalendarStore(state => state.dayConfirm)
    const formatDate = (dateString:string) => {
        return dayjs(dateString).format('dddd, D MMMM');
    };
    return (
    <section className='flex w-full' >
        {
            dayConfirmed &&
            <div className="grid md:grid-cols-3 gap-4 w-full" >
                <div className="rounded-lg border bg-card text-card-foreground w-full shadow-sm"> 
                    <div className='p-3 flex flex-col h-full items-center w-full justify-center'>
                        <span className='flex gap-2 items-center justify-center'>
                            <CalendarCheck/>  Data:  
                        </span>
                        <span className="font-medium"> {formatDate(dayConfirmed?.date)}</span> 
                    </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground w-full shadow-sm"> 
                    <div className='p-3 flex flex-col h-full items-center w-full justify-center'>
                        <span className='flex gap-2 items-center justify-center'>
                            <Reloj/> Ora: 
                        </span>
                        <span className="font-medium">{dayConfirmed?.hour}</span> 
                    </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground w-full shadow-sm"> 
                    <div className='p-3 flex flex-col h-full items-center w-full justify-center'>
                        <span className='flex gap-2 items-center justify-center'>
                            <GeoLocationSalon/> Ubicazione: 
                        </span>
                        <span className="font-medium"> {dayConfirmed?.location} </span>   
                    </div>
                </div>
            </div>
        }
    </section>
  )
}

export default DatosCita