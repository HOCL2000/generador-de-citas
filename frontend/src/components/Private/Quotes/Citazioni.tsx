import Layout from '../Dashboard/Layout'
import MenuPhone from '../MenuResponsive/MenuPhone'
import SideBar from '../Sidebar/SideBar'
import AllQuotes from './AllQuotes'

const Citazioni = () => {
  return (
    <Layout>
        <main className='grid  h-full min-h-screen  w-full  lg:grid-cols-[220px,_1fr]'>
          <div className="hidden flex-none lg:flex overflow-hidden lg:overflow-auto relative w-full">
            <SideBar/>
          </div>
          <MenuPhone/>
          <AllQuotes/>
        </main>
    </Layout>
  )
}

export default Citazioni