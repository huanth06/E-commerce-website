import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function CategoryEdit() {
    let { id } = useParams();
    let [data, setData] = useState({
        id: '',
        name: ''
    });
    useEffect(() => {
        axios.get("http://localhost:3000/categories/" + id).then((res) => {
            setData(res.data);
        });
    }, []);
    return (
        <>
            <div className='product-add mt-4'>
                <div className='page-title'>
                <h1>Edit Product Category - {data.name}</h1>
                <button type="" className="btn btn-light"><Link to={'/_cpanel/categories'}>Back To List</Link></button>
                </div>
                <hr />
                <Formik
                    initialValues={data}
                    enableReinitialize={true}
                    onSubmit={values => {
                        axios.put("http://localhost:3000/categories/" + id, values).then((res) => {
                            alert("Edited successfully!");
                        });
                    }}
                >
                    <Form>
                        <div class="form-group">
                            <label for="product-id">ID</label>
                            <Field id="product-id" className="form-control" type="text" name={'id'}  ></Field>
                        </div>
                        <div class="form-group">
                            <label for="product-name">Name</label>
                            <Field id="product-name" className="form-control" type="text" name={'name'}  ></Field>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success'>Save</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
