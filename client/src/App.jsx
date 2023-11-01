import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Home ,Login,Signup,TermsPrivacy,About} from './pages'

export default function App() {

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path='/login' element={<Login log={true} />} />
      <Route path='/signup' element={<Signup log={false} />} />
      <Route path='/signup' element={<Signup log={false} />} />
      <Route path='/About' element={<About />} />
      {/* <Route path='./Contact' element={<Contact />} /> */}
      <Route path='/terms-of-service' element={<TermsPrivacy />} />
      {/* <Route path="*" element={<_404_ />} /> */}
    </Routes>
  )
}


