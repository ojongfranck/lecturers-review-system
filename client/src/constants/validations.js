import * as Yup from 'yup'
import { passReg, emailReg } from './regex'

const Matricule = Yup.string()
    .length(8, "Shouldn't exceed 8 characters")
    .required('Your matricule is required!')

const FullName = Yup.string()
    .min(6, 'Should be greater than 5 characters ')
    .max(50, "Shouldn't exceed 50 characters")
    .required('Please provide a name!')

const Password = Yup.string()
    .matches(passReg, {
        message: "Please provide a stronger password"
    }).required('Your password is required')

const ConfirmPassword = Yup.string()
    .oneOf([Yup.ref('Password'), null], "Passwords should match")
    .required('Confirm password is required!')

const Email = Yup.string()
    .matches(emailReg, { message: 'Invalid email address' })
    .required('Your email is required!')

const Required = Yup.string().required('This is a required field')

// const phoneNumber = Yup.string()
//     .matches(phoneReg, {
//         message: "Please provide a valid phone number"
//     }).required('please provide your phone number')

const Terms = Yup.boolean()
    .oneOf([true], 'You must accept our terms and conditions')


export { Matricule, Required, Email, Password, Terms, ConfirmPassword, FullName }