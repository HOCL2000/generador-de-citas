import AllDates from "../AllDates"
import Aside from "../Aside"
import AsideInfoSalon from "./AsideInfoSalon"

const Pescara = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] grow flex-1 h-full bg-zinc-50 w-full min-h-screen gap-y-3" >
      <div className=" mx-2 mb-8 md:w-full h-full  grid md:m-0 place-items-center place-content-start md:place-content-center ">
        <div className="w-full relative shadow rounded border bg-white max-w-[1000px] lg:p-4 ">
          <Aside/>
          <AsideInfoSalon/>
          <AllDates/>
        </div>
      </div>
    </div>
  )
}

export default Pescara