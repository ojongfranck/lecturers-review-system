import { Form, Formik } from 'formik';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Required, Email } from '../constants/validations'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import { PasswordField } from '../components/Fields';
import { Input, LogSignTab, SEO } from '../components';

export default function Login({ log = true }) {
    const [onLogin, setOnlogin] = useState(log)
    const [onSignup, setOnsignup] = useState(!log)
    function setType(t) {
        setOnlogin(t === 'l' ? true : false);
        setOnsignup(t === 's' ? true : false)
    }

    return (
        <div className="box mb-12">
            <SEO
                title={'Login'}
                description={'Login to your existing  account'}
            />
            <LogSignTab onLogin={onLogin} onSignup={onSignup} setType={setType} />
            <Formik
                initialValues={{ Email: '', Password: '' }}
                validationSchema={Yup.object().shape({
                    Email: Required,
                    Password: Required
                }
                )}
                onSubmit={(values, form) => { toast.success(JSON.stringify(values)); form.reset() }}
            >
                <Form m className='mx-auto p-4 py-8 grid max-w-[28em] rounded-lg shadow-2xl shadow-[#00000028] transition-shadow duration-500 hover:shadow-md border-t-[1px] border-[#e2e8f4] bg-white'>
                    {/* <h1 className='mb-2 text-2xl lg:text-3xl transition-all duration-400 font-semibold text-center'>Login</h1> */}
                    <Input
                        id='Email'
                        label="Email"
                        name="Email"
                        type="email"
                        placeholder="youremail@gmail.com"
                        maxLength="100"
                    />
                    <PasswordField id='Password' label='Password' />
                    <button type='button' onClick={() => my_modal_2.showModal()} className="text-right mt-3 link-error cursor-pointer">forgot password?</button>
                    <button type="submit" className="btn btn-primary mt-4">login</button>
                    <p className='text-sm mt-3'>Don't have an account yet? <Link onClick={() => setType('s')} to='/signup' className='act'>signup</Link></p>
                    <ToastContainer position='top-right' />
                </Form>
            </Formik>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">Password Reset</h3>
                    <p className="py-4">Please provide us your email, to receive instructions on how to reset your password</p>
                    <Formik
                        initialValues={{ resetMail: '' }}
                        validationSchema={Yup.object().shape({ resetMail: Email })}
                        onSubmit={values => alert(JSON.stringify(values))}
                    >
                        <Form>
                            <Input
                                id='resetMail'
                                label="Your Email"
                                name="resetMail"
                                type="email"
                                placeholder="youremail@gmail.com"
                            // maxLength="100"
                            />
                            <button type='submit' className='btn btn-primary text-white mt-3 w-full'> reset</button>
                        </Form>
                    </Formik>
                </div>
                <form method="dialog" className="modal-backdrop bg-[#0005]">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}