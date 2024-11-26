import ChartRadar from "./charts/stadistics/ChartRadar"
import ChartTypeOfService from "./charts/stadistics/ChartTypeOfService"
import GridTables from "./GridTables"
import SaludoItaliano from "./SaludoItaliano"
import TableUsuariosDisponibles from "./tables/users/TableUsuariosDisponibles"

const Dashboard = () => {


  return (
    <section className='bg-white h-full   grow flex flex-1  flex-col  '>
      <SaludoItaliano/>
      <GridTables/>
      <div className="grid gap-y-4  md:grid-cols-[65%,35%]  ">
        <ChartTypeOfService/>
        <ChartRadar/>
      </div>
      <TableUsuariosDisponibles/>
    </section>
  )


}

export default Dashboard