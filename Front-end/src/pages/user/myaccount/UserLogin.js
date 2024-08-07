import React, { useState, useContext } from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import {useNavigate } from "react-router-dom";
import * as yup from 'yup';
import axios from 'axios';
import { MyContext } from '../../../MyContext';
const validateSchema = yup.object({
  username: yup
    .string()
    .required('Please Enter Your Username'),
  password: yup
    .string()
    .required('Please Enter Your Password'),
});
export default function UserLogin() {
  const [ctx, setCtx] = useContext(MyContext);
  let navigate = useNavigate();
  return (
    <>

      <div className="col-12 col-md-6">
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
              localStorage.setItem('userData', values.username);
              navigate('/')
            }).catch(() => {
              alert('Incorrect username or password.');
            })
          }}
        >
          <Form id="login">
            <div className="card">
              <div className="card-body border-bottom"><h3 className="card-title">Returning Customer? Log In. </h3></div>
              <div className="card-body">
                <div className="form-row">
                  <div className="col-12 col-md-6">
                    <div className="form-group ">
                      <label for="username">Username</label>
                      <Field type="text" id="username" name="username" className="form-control"  size="25" />
                      <p className="err text-left small"><ErrorMessage name={'username'}></ErrorMessage></p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label for="password">My Password is</label>
                      <Field type="password" id="password" name="password" className="form-control" size="25" autocomplete="off"  />
                      <p className="err text-left small"><ErrorMessage name={'password'}></ErrorMessage></p>
                    </div>
                  </div>
                  <button className="btn btn-lg btn-success btn-block"><i className="fa fa-user"></i> Login Now</button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>

    </>
  )
}
