import { Form, Formik } from 'formik'
import { Icon, Input } from '../components'
import { Email, Required } from '../constants/validations'
import * as Yup from 'yup'


export default function Contact() {
    return (
        <section className='box my-12' id="contact">
            <h2 className="text-center text-3xl font-semibold mb-12 ">Contact Us</h2>
            {/* <h2 className="">Contact us the get started</h2> */}
            <div className="lg:flex justify-center gap-6">
                <div className="lg:w-2/5 border-y-2 border-primary shadow-2xl p-6">
                    <div>
                        <Detail til='Location' det='A108 Adam Street, New York, NY 535022' icon='Geo' />
                        <Detail til='Location' det='A108 Adam Street, New York, NY 535022' icon='Envelope' />
                        <Detail til='Call' det='' icon='Phone' />
                    </div>
                    <div className="h-96 mt-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.325156009243!2d9.271245175103704!3d4.156325346136006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106133478cc3b989%3A0x6e46b6d1f8b23428!2sNDONGO!5e0!3m2!1sen!2scm!4v1688762384081!5m2!1sen!2scm" className="b-0 w-full h-full" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="lg:mt-0 mt-8 lg:w-7/12 border-y-2 border-primary shadow-2xl p-6">
                    <Formik
                        initialValues={{
                            Name: '',
                            Email: '',
                            Subject: '',
                            Message: ''

                        }}
                        validationSchema={Yup.object().shape({
                            Name: Required,
                            Email,
                            Subject: Required,
                            Message: Required
                        })}
                        onSubmit={values => alert(JSON.stringify(values))}
                    >

                        <Form>
                            <div className="lg:flex sm:flex gap-0 lg:gap-4 grid sm:gap-4 ">
                                <Input
                                    label='Name'
                                    id='Name'
                                    name='Name'
                                    placeholder='your name'

                                />
                                <Input
                                    label='Email'
                                    id='Email'
                                    name='Email'
                                    type='email'
                                    placeholder='your email'

                                />
                            </div>
                            <Input
                                label='Subject'
                                id='Subject'
                                name='Subject'
                                placeholder='your message subject'
                            />
                            <Input
                                label='Message'
                                textarea
                                id='Message'
                                name='Message'
                            />
                            <button type='submit' className='mt-4 sm:w-48 w-full btn btn-primary'>Send Message</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    )

}

const Detail = ({ til, det, icon }) => {

    return (
        <div className="flex gap-4 pr-3 mb-6 cursor-pointer">
            <div className="btn btn-circle"><Icon name={icon} className='text-primary transition-all text-lg' /> </div>
            <div >
                <h3 className='font-semibold text-lg'>{til}:</h3>
                <p className='text-sm text-slate-500'>{det}</p>
            </div>
        </div>)
}

