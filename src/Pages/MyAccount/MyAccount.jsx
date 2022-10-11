import React from "react";
import { useState } from "react";
import clsx from "clsx";
import styles from "./MyAccount.module.css";
import { useLoginFormValidator } from "./FormValidator";
import ProductTitle from "../../Components/ProductTitle/ProductTitle";

const LoginForm = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };
  return (
    <div>
      <ProductTitle title="My Account" ProductDetails="My Account" />
      <div className={styles.accountLogin}>
        <div className={styles.login}>
          <h3>Login</h3>
          <h6>Please login using account detail below.</h6>
          <form className={styles.loginForm} action="" onSubmit={onSubmitForm}>
            <label htmlFor="email"></label>
            <input
              className={clsx(
                styles.formField,
                errors.email.dirty &&
                  errors.email.error &&
                  styles.formFieldError
              )}
              type="text"
              name="email"
              id="loginEmail"
              placeholder="Email Address"
              value={form.email}
              onChange={onUpdateField}
              onBlur={onBlurField}
            />
            {errors.email.dirty && errors.email.error ? (
              <p className={styles.formFieldErrorMessage}>
                {errors.email.message}
              </p>
            ) : null}
            <div className="input-feedback"></div>
            <label htmlFor="email"></label>
            <input
              className={clsx(
                styles.formField,
                errors.password.dirty &&
                  errors.password.error &&
                  styles.formFieldError
              )}
              type="password"
              name="password"
              id="passwordLogin"
              placeholder="Password"
              value={form.password}
              onChange={onUpdateField}
              onBlur={onBlurField}
            />
            {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
              <p className={styles.formFieldErrorMessage}>
                {errors.confirmPassword.message}
              </p>
            ) : null}
            <label className={styles.formLabel}></label>
            <input
              className={clsx(
                styles.formField,
                errors.confirmPassword.dirty &&
                  errors.confirmPassword.error &&
                  styles.formFieldError
              )}
              type="password"
              aria-label="Confirm password field"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onUpdateField}
              onBlur={onBlurField}
            />
            {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
              <p className={styles.formFieldErrorMessage}>
                {errors.confirmPassword.message}
              </p>
            ) : null}
            <i>Forgot your password?</i>
            <button type="submit" className={styles.submitLogin}>
              Sign In
            </button>
            <a href="#">Don’t have an Account?Create account</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
