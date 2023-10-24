// import { Form, Formik } from 'formik';
// import { useState, useEffect } from 'react'
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
// import 'react-toastify/dist/ReactToastify.css';
// import { FullName, Email, Matricule, Password, Terms, ConfirmPassword, Required } from '../constants/validations'
// import * as Yup from 'yup'
// import { ToastContainer, toast } from 'react-toastify'
// import { CheckBoxField, PasswordField } from '../components/Fields';
// import { Input, SEO } from '../components';

// export default function UserForm({ log = true }) {
//   const navigate = useNavigate()
//   const location = useLocation()

//   const [onLogin, setOnlogin] = useState(log)
//   const [onSignup, setOnsignup] = useState(!log)
//   function setType(t) {
//     // navigate(onLogin ? '/login' : '/signup', { state: { formType: 'login' } })
//     setOnlogin(t === 'l' ? true : false);
//     setOnsignup(t === 's' ? true : false)
//   }

//   useEffect(() => {
//     const type = JSON.stringify(location.state)
//     // if(type!==  null) {
//     //   alert(type)
//     // }

//     // alert(type.split('/ ')[0])
//     // setUser(!type)
//     // setCompany(type)
//   }, [])
//   return (
//     <div className="box mb-12">
//       <SEO
//         title={log ? 'Login' : 'Signup'}
//         description={log ? 'Login to your existing  account' : 'Create a new account today to start reviewing with us'}
//       />
//       <div className="mt-8 text-center -mb-[.8px]">
//         <h3 className='text-2xl font-bold mb-8'>Teach Review</h3>
//         <div className='tabs justify-center'>
//           <div className='tab tab-lifted h-10'  ></div>
//           <Link to='/login' onClick={() => setType('l')} className={`tab tab-lifted text-xl h-10 ${onLogin ? 'tab-active text-primary' : ''}`}  >Login</Link>
//           <Link to='/signup' onClick={() => setType('s')} className={`tab tab-lifted text-xl h-10 ${onSignup ? 'tab-active text-primary' : ''}`} >Signup</Link>
//           <div className='tab tab-lifted h-10'></div>
//         </div>
//       </div>
//       {onLogin ? <Formik
//         initialValues={{ LEmail: '', LPassword: '' }}
//         validateOnChange={true}
//         validationSchema={Yup.object().shape({
//           LEmail: Required,
//           LPassword: Required
//         }
//         )}
//         onSubmit={(values,form) => {toast.success(JSON.stringify(values));form.reset()}}
//       >
//         <Form className='mx-auto p-4 py-8 grid max-w-[28em] rounded-lg shadow-2xl shadow-[#00000028] transition-shadow duration-500 hover:shadow-md border-t-[1px] border-[#e2e8f4] bg-white'>
//           {/* <h1 className='mb-2 text-2xl lg:text-3xl transition-all duration-400 font-semibold text-center'>Login</h1> */}
//           <Input
//             id='LEmail'
//             label="Email"
//             name="LEmail"
//             type="email"
//             placeholder="youremail@gmail.com"
//             maxLength="100"
//           /> 
//           <PasswordField id='LPassword' label='Password' />
//           <Link to='/forgot-password' className="text-right my-3 link-primary cursor-pointer">forgot password?</Link>

//           <button type="submit" className="btn btn-primary mt-4">login</button>
//           <p className='text-sm mt-3'>Don't have an account yet? <Link reloadDocument={true} to='/signup' className='act'>signup</Link></p>
//           <ToastContainer position='top-center' />
//         </Form>
//       </Formik> : <Formik
//         initialValues={
//           {
//             FullName: '',
//             Email: '',
//             Password: '',
//             ConfirmPassword: '',
//             Matricule: '',
//             Terms: false
//           }}
//         validationSchema={Yup.object().shape({
//           FullName,
//           Matricule,
//           Email,
//           Password,
//           ConfirmPassword,
//           Terms,
//         })}
//         onSubmit={(values,form) => {toast.success(JSON.stringify(values));form.reset()}}

//       >

//         <Form className='mx-auto p-4 py-8 grid max-w-[28em] rounded-lg shadow-2xl shadow-[#00000028] transition-shadow duration-500 hover:shadow-md border-t-[1px] border-[#e2e8f4] bg-white'>
//           {/* <h1 className='mb-2 text-2xl lg:text-3xl font-semibold font-poppins text-center'>Signup</h1> */}


//           <Input
//             id='FullName'
//             label='Full Name'
//             name='FullName'
//             type="text"
//             placeholder='your full name'
//           // maxLength="40"
//           />
//           <Input id='Matricule' label='Matricule' name='Matricule' placeholder='student matricule' />
//           <Input
//             id='Email'
//             label="Email"
//             name="Email"
//             type="email"
//             placeholder="youremail@gmail.com"
//             maxLength="100"
//           />
//           <div className="sm:flex gap-4">
//             <PasswordField
//               id='Password'
//               label='Password'
//             />
//             <PasswordField
//               id='ConfirmPassword'

//               label='Confirm password' />
//           </div>
//           <div className="flex my-2">
//             <CheckBoxField message='I agree to our ' url='terms' name='Terms' id='Terms'
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" >signup</button>
//           <ToastContainer position='top-right' />
//           <p className='text-xs mt-2'>Already have an account? <Link to='/login' reloadDocument={true} className='act'>login instead</Link></p>
//         </Form>
//       </Formik>}
//     </div>
//   )
// }