import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ProudctEdit() {
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState();
    let { id } = useParams();
    let [data, setData] = useState({
        id: '',
        name: '',
        price: '',
        quantity: ''
    });
    useEffect(() => {
        axios.get('http://localhost:3000/categories').then(x => {
            setCates(x.data)
        })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:3000/products/" + id).then((res) => {
            setData(res.data);
        });
    }, []);
    return (
        <>
            <div className='product-add mt-4'>
                <div className='page-title'>
                    <h1>Edit Product "{data.name}"</h1>
                    <button type="" className="btn btn-light"><Link to={'/_cpanel/products'}>Back To List</Link></button>
                </div>
                <hr />
                <Formik
                    initialValues={data}
                    enableReinitialize={true}
                    onSubmit={values => {
                        let category = cates.find(e => e.id == selected);
                        if (category === undefined) {
                            category = cates[0];
                        }
                        values = { ...values, category };
                        axios.put("http://localhost:3000/products/" + id, values).then((res) => {
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
                        <div class="form-group">
                            <label for="price">Price</label>
                            <Field id="price" className="form-control" type="text" name={'price'}  ></Field>
                        </div>
                        <div class="form-group">
                            <label for="quantity">Quantity</label>
                            <Field id="quantity" className="form-control" type="number" name={'quantity'}  ></Field>
                        </div>
                        <div class="form-group">
                            <label for="category">Categories</label>
                            <select id="category" class="form-control" onChange={(e) => {
                                setSelected(e.target.value);
                            }}>
                                {cates.map(e => (<option value={e.id} selected={data?.category?.id === e.id}>{e.name}</option>))}
                            </select>
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
