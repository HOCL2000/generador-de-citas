import Aside from "./Aside"
import Selectubication from "./Selectubication"


const StartView = () => {
  return (
    <div className="min-h-screen bg-zinc-50 w-full  place-content-center place-items-center ">
      <div className="w-full flex items-center justify-center h-full">
        <div className="flex relative items-center justify-center max-w-[1000px]  w-full">
          <Aside/>
          <Selectubication/>
        </div>
      </div>
    </div>
  )
}

export default StartView