import { UseAdminStore } from "@/store/adminStore";
import Dashboard from "./Dashboard"
import Layout from "./Layout"
import { useEffect } from "react";
import MenuPhone from "../MenuResponsive/MenuPhone";
import SideBar from "../Sidebar/SideBar";

const Home = () => {
  const fetchDaysData = UseAdminStore((state) => state.fetchallDaysEnabled);
  useEffect(() => {
    fetchDaysData();
  }, [fetchDaysData]);
  
  return (
    <Layout>
        <main className='flex flex-col lg:grid  h-full min-h-screen w-full  lg:grid-cols-[220px,_1fr]'>
          <div className="hidden flex-none lg:flex overflow-hidden lg:overflow-auto relative w-full">
            <SideBar/>
          </div>
          <MenuPhone/>
          <Dashboard/>
        </main>
    </Layout>
  )
}

export default Home