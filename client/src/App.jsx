import './App.css'
import { Route, Routes } from 'react-router-dom'
import { _404_, Home ,Login,Signup} from './pages'

export default function App() {

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path='/login' element={<Login log={true} />} />
      <Route path='/signup' element={<Signup log={false} />} />
      <Route path="*" element={<_404_ />} />
    </Routes>
  )
}

