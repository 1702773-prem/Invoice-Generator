
import * as Yup from 'yup'

export const SignInSchema = Yup.object().shape({

    email : Yup.string().email("Invalid Email").required("Email is required"),
    password : Yup.string().min(5,'Password should be greater than 4').required("Password is required")

})

export const SignUpSchema = Yup.object().shape({
    name : Yup.string().required("Name is Required"),
    email: Yup.string().email("Email is required").required("Email is required"),
    password: Yup.string().min(5,"Password should be greater than 4").required("Password should be required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required")
})