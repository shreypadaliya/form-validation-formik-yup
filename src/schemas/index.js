import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(10).required("Enter your name"),
    email:Yup.string().email().required('Enter your email'),
    password:Yup.string().min(6).max(10).required("enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],"password must match")
})

// import * as Yup from "yup";

// export const signUpSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string().email("Invalid email format").required("Email is required"),
//   password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//   confirm_password: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });
