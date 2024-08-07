import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import axios from 'axios';

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
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});
export default function UserRegister() {
    let navigate = useNavigate();
    return (
        <>
            <div className="col-12 col-md-6">
                <Formik
                    initialValues={
                        {
                            name: '',
                            username: '',
                            password: '',
                            confirmPassword: ''
                        }
                    }
                    validationSchema={validateSchema}
                    onSubmit={(values,{ resetForm }) => {
                        axios.post('http://localhost:3000/users/register', values).then(() => {
                            alert('Registration successful.');
                            localStorage.setItem('userData', values.username);
                            resetForm();
                            navigate('/_myacct/login-register');
                        });
                    }}
                >
                    <Form id="login">
                        <div className="card">
                            <div className="card-body border-bottom"><h3 className="card-title">Returning Customer? Log In. </h3></div>
                            <div className="card-body">
                                <div className="form-row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group ">
                                            <label for="name">Name</label>
                                            <Field type="text" id="name" name="name" className="form-control" size="25" />
                                            <p className="err text-left small"><ErrorMessage name={'name'}></ErrorMessage></p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group ">
                                            <label for="username">Username</label>
                                            <Field type="text" id="username" name="username" className="form-control" size="25" />
                                            <p className="err text-left small"><ErrorMessage name={'username'}></ErrorMessage></p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <Field type="password" id="password" name="password" className="form-control" size="25" autocomplete="off" />
                                            <p className="err text-left small"><ErrorMessage name={'password'}></ErrorMessage></p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label for="reg_password2">Confirm Password</label>
                                            <Field type="password" id="reg_password2" name="confirmPassword" className="form-control" size="25" autocomplete="off" />
                                            <p className="err text-left small"><ErrorMessage name={'confirmPassword'}></ErrorMessage></p>
                                        </div>
                                    </div>
                                    <button className="btn btn-lg btn-block btn-success"><i class="fa fa-plus"></i> Register and Continue</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
