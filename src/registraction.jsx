import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/index"; 

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Welcome!</h1>
            <p className="modal-desc">
              To the thapa technical website for programmers.
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-block">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="confirm_password" className="input-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirm_password && formik.errors.confirm_password ? (
                  <div className="error">{formik.errors.confirm_password}</div>
                ) : null}
              </div>
              <div className="modal-buttons">
                <a href="#" className="">
                  Want to register using Gmail?
                </a>
                <button className="input-button" type="submit">
                  Registration
                </button>
              </div>
            </form>
            <p className="sign-up">
              Already have an account? <a href="#">Sign In now</a>
            </p>
          </div>
          <div className="modal-right">
            <img
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;



// //By destructuring formik
// import React from "react";
// import { useFormik,Field,Formik,Form } from "formik";
// import { signUpSchema } from "./schemas/index";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// };

// const Registration = () => {
//   const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: signUpSchema,
//       onSubmit: (values,action) => {
//         console.log(values);
//         console.log({
//           handleChange,
//           handleBlur,
//           values,
//           errors,
//           touched,
//           handleSubmit,
//         });
//         action.resetForm()
//       },
//     });

//   return (
//     <div className="container">
//       <div className="modal">
//         <div className="modal-container">
//           <div className="modal-left">
//             <h1 className="modal-title">Welcome!</h1>
//             <p className="modal-desc">
//               To the thapa technical website for programmers.
//             </p>
//             <form onSubmit={handleSubmit}>
//               <div className="input-block">
//                 <label htmlFor="name" className="input-label">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   autoComplete="off"
//                   name="name"
//                   id="name"
//                   placeholder="Name"
//                   value={values.name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.name && errors.name ? (
//                   <div className="error">{errors.name}</div>
//                 ) : null}
//               </div>
//               <div className="input-block">
//                 <label htmlFor="email" className="input-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   autoComplete="off"
//                   name="email"
//                   id="email"
//                   placeholder="Email"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.email && errors.email ? (
//                   <div className="error">{errors.email}</div>
//                 ) : null}
//               </div>
//               <div className="input-block">
//                 <label htmlFor="password" className="input-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   autoComplete="off"
//                   name="password"
//                   id="password"
//                   placeholder="Password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.password && errors.password ? (
//                   <div className="error">{errors.password}</div>
//                 ) : null}
//               </div>
//               <div className="input-block">
//                 <label htmlFor="confirm_password" className="input-label">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   autoComplete="off"
//                   name="confirm_password"
//                   id="confirm_password"
//                   placeholder="Confirm Password"
//                   value={values.confirm_password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.confirm_password && errors.confirm_password ? (
//                   <div className="error">{errors.confirm_password}</div>
//                 ) : null}
//               </div>
//               <div className="modal-buttons">
//                 <a href="#" className="">
//                   Want to register using Gmail?
//                 </a>
//                 <button className="input-button" type="submit">
//                   Registration
//                 </button>
//               </div>
//             </form>
//             <p className="sign-up">
//               Already have an account? <a href="#">Sign In now</a>
//             </p>
//           </div>
//           <div className="modal-right">
//             <img
//               src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;

