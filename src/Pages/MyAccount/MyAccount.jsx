import React from "react";
import "./MyAccount.css";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const MyAccount = () => {
  // <Formik
  //   initialValues={{ email: "", password: "" }}
  //   onSubmit={(values, { setSubmitting }) => {
  //     setTimeout(() => {
  //       console.log("logging in", values);
  //       setSubmitting(false);
  //     }, 500);
  //   }}
  // >
    {/* validationSchema={Yup.object().shape({
      email:Yup.string()
      .email()
      .required('Required')
    })} */}
    {/* validationSchema={Yup.object().shape({
      email:Yup.strin)g()
      .email()
      .required('Required'),
      password:Yup.string()
      .required('No Password Provided.')
      .min(8, 'Passwordis too short - should be 8 chars minimum')
      .matches(/(?=.*[0-9])/, 'Password must contain a number.')
    })} */}
    // {(props) => {
    //   const {
    //     values,
    //     touched,
    //     errors,
    //     isSubmitting,
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //   } = props;
    
      return (
        <div className="accountLogin">
          <div className="login">
            <h3>Login</h3>
            <p>Please login using account detail bellow.</p>
            <form className="loginForm" action="">
              <label htmlFor="email"></label>
              <input
                type="text"
                name="email"
                id="loginEmail"
                placeholder="Email Address"
                // value={values.email}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // className={errors.email && touched.email && 'error'}
              />
              <div className="input-feedback"></div>
              <label htmlFor="email"></label>
              <input
                type="password"
                name="password"
                id="passwordLogin"
                placeholder="Password"
                // value={values.password}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // className={errors.password && touched.password && 'error'}
              />
              {/* {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )} */}
              <a>Forgot your password?</a>
           <button type="submit"  id="submitLogin">Sign In</button>
              {/* <input
                type="button"
                id="submitLogin"
                disabled={isSubmitting}
                value="Sign In"
              /> */}
              <a href="#">Don’t have an Account?Create account</a>
            </form>
          </div>
        </div>
      );
  //   }}
  //  </Formik>;    
};

export default MyAccount;
