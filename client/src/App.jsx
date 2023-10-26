import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Contact, Home ,Login,Signup,TermsPrivacy} from './pages'

export default function App() {

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path='/login' element={<Login log={true} />} />
      <Route path='/signup' element={<Signup log={false} />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/terms-of-service" element={<TermsPrivacy/>} />
    </Routes>
  )
}


