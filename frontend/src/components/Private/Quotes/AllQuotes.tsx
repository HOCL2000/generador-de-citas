import { UseAdminStore } from "@/store/adminStore"
import dayjs from "dayjs"
import { Calendar, dayjsLocalizer, SlotInfo } from "react-big-calendar"
import {  useEffect } from "react"
import '@/calendarAdmin.css'
import DaysDetails from "./DaysDetails"
import SaludoItaliano from "../Dashboard/SaludoItaliano"
import TableDetailsQuotes from "../Dashboard/tables/detailQuote/TableDetailsQuotes"


const AllQuotes = () => {
  dayjs.locale("it")
  const localizer = dayjsLocalizer(dayjs)
  const changeDay = UseAdminStore(state => state.changeDaySelected)
  const dateSelectedByAdmin = UseAdminStore(state => state.daySelectByAdmin)
  const allDays = UseAdminStore((state) => state.allDayEnabledArray);
  const fetchDaysData = UseAdminStore((state) => state.fetchallDaysEnabled);

  const handleSelectSlot = (e: SlotInfo) => {
    const dateSelectByAdmin = dayjs(e.start).format("YYYY-MM-DD")
    const today = dayjs().format("YYYY-MM-DD")
    if (dateSelectByAdmin >= today) {
      changeDay(dateSelectByAdmin)
    } 
  };

  const dayPropGetter = (date: Date) => {
    const today = dayjs().startOf('day'); 
    const isBeforeToday = dayjs(date).isBefore(today); 
    const hasEvent = allDays.some(event => dayjs(event.date).isSame(date, 'day'));
    if (hasEvent) {
      return {
        className: 'rbc-has-event-day' 
      };
    }

    if (isBeforeToday) {
      return {
        className: 'rbc-disabled-day' 
      };
    }

    return {
      className: 'rbc-available-day' 
    };
  }

  useEffect(() => {
    fetchDaysData();
  }, [fetchDaysData]);

  return (
    <div className="bg-white h-full  rounded-lg  flex   flex-col shadow ">
      <SaludoItaliano/>
      <main className="flex w-full h-full item flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-row items-center  w-full">
          <section className="flex max-w-[400px] w-full p-2">
            <section className="flex border rounded flex-col w-full max-w-[400px]  h-full">
              <Calendar 
                localizer={localizer}  
                style={{ width: "100%", padding: ".5em", height: "350px"}} 
                selectable
                onSelectSlot={handleSelectSlot}
                dayPropGetter={dayPropGetter}
                views={["month"]}
              />
            </section>
          </section>
          <section className="w-full flex p-2 ">
            <section className="w-full h-full border p-2 rounded  ">
              {dateSelectedByAdmin && 
                <DaysDetails/>
              }
            </section>
          </section>
        </div>
      </main>
      <TableDetailsQuotes/>

    </div>
  )
}

export default AllQuotes