import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';

const validateSchema = yup.object({
    username: yup
        .string()
        .required('Please Enter Your Username'),
    password: yup
        .string()
        .required('Please Enter Your Password'),
});

export default function Login() {

    let navigate = useNavigate();
    return (
        <>
            <div className="login-container">
                <div className="container d-flex align-items-center text-center">
                    <div className="form-signin">
                        <Formik
                            initialValues={
                                {
                                    username: '',
                                    password: '',
                                }
                            }
                            validationSchema={validateSchema}
                            onSubmit={values => {
                                axios.post('http://localhost:3000/users/login', values).then(() => {
                                    alert('Login successful.');
                                    navigate('/_cpanel')
                                }).catch(() => {
                                    alert('Incorrect username or password.');
                                })
                            }}
                        >
                            <Form>
                                <h1>Login</h1>
                                <p>Sign In to your account</p>
                                <div className="form-floating">
                                    <Field className="form-control username" type="text" name="username" placeholder="Username" ></Field>
                                    <p className="err text-left small"><ErrorMessage name={'username'}></ErrorMessage></p>
                                </div>
                                <div className="form-floating">
                                    <Field className="form-control password" type="password" name="password" placeholder="Password"></Field>
                                    <p className="err text-left small"><ErrorMessage name={'password'}></ErrorMessage></p>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary btn-register mb-2" type="" >Login</button>
                                <button className="w-100 btn btn-lg btn-danger" type="button" ><Link to={'/register'}>Register</Link></button>
                                <p className="mt-4 mb-3 text-muted">© {new Date().getFullYear()}</p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}