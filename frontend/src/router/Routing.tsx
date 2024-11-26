import {Route, Routes, BrowserRouter} from 'react-router-dom'
import StartView from '@/components/StartView'
import Pescara from '@/components/Incontro/Pescara'
import SamBe from '@/components/Incontro/SamBe'
import Appuntamenti from '@/components/Appuntamenti'
import AdminLogin from '@/components/Private/AdminLogin'
import ProteccionAdmin from '@/components/Private/ProteccionAdmin'
import PublicProteccion from '@/components/PublicProteccion'
import ConfirmarCita from '@/components/Incontro/ConfirmarCita'
import { Toaster } from 'sonner'
import Home from '@/components/Private/Dashboard/Home'
import Citazioni from '@/components/Private/Quotes/Citazioni'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicProteccion/>}>
          <Route path='/' element={<StartView/>} />
          <Route path='/incontrope' element={<Pescara />} />
          <Route path='/incontrosbt' element={<SamBe />} />
          <Route path='/lemieappuntamenti' element={<Appuntamenti />} />
          <Route path='/administrazione' element={<AdminLogin/>} />
          <Route path='/confirmare-apputamenti' element={<ConfirmarCita/>} />
        </Route>
        
        <Route element={<ProteccionAdmin/>}>
          <Route path='/administrazione/inizio' element={<Home/>} />
          <Route path='/administrazione/citazioni' element={<Citazioni/>} />
        </Route>
      </Routes>
      <Toaster richColors/>
    </BrowserRouter>
  )
}

export default Routing