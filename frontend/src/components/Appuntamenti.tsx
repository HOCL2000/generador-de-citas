import Aside from "./Aside"
import MyDates from "./MyDates"

const Appuntamenti = () => {
  return (
    <div className="min-h-screen grid w-full place-content-center place-items-center bg-zinc-50 ">
      <div className="relative w-full  border rounded-xl p-2 bg-white shadow">
        <Aside />
        <MyDates/>
      </div>
    </div>
  )
}

export default Appuntamenti