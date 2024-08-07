import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Field, Formik, ErrorMessage } from 'formik'
import axios from "axios";
import * as yup from 'yup';

const validateSchema = yup.object({
    name: yup
        .string()
        .required('Please Enter Your Name'),
    username: yup
        .string()
        .required('Please Enter Your Username'),
    password: yup
        .string()
        .required('Please Enter Your Password'),
});
export default function Register() {
    let navigate = useNavigate();
    return (
        <>
            <div className="login-container">
                <div className="container d-flex align-items-center text-center">
                    <div className="form-signin">
                        <Formik
                            initialValues={
                                {
                                    name: '',
                                    username: '',
                                    password: ''
                                }
                            }
                            validationSchema={validateSchema}
                            onSubmit={values => {
                                axios.post('http://localhost:3000/users/register', values).then(() => {
                                    alert('Registration successful.');
                                    navigate('/login');
                                });
                            }}
                        >
                            <Form>
                                <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                                <div className="form-floating">
                                    <Field className="form-control name" type="text" name="name" placeholder="Name"></Field>
                                    <p className="err text-left small"><ErrorMessage name={'name'}></ErrorMessage></p>
                                </div>
                                <div className="form-floating">
                                    <Field className="form-control username" type="text" name="username" placeholder="Username"></Field>
                                    <p className="err text-left small"><ErrorMessage name={'username'}></ErrorMessage></p>
                                </div>
                                <div className="form-floating">
                                    <Field className="form-control password" type="password" name="password" placeholder="Password"></Field>
                                    <p className="err text-left small"><ErrorMessage name={'password'}></ErrorMessage></p>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary btn-register mb-2" type="">Register</button>
                                <button className="w-100 btn btn-lg btn-danger" type="button" ><Link to={'/login'}>Login</Link></button>
                                <p className="mt-4 mb-3 text-muted">© {new Date().getFullYear()}</p>
                            </Form>
                        </Formik>

                    </div>
                </div>
            </div>
        </>
    )
}