import React, { useContext, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { MyContext } from '../../../MyContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function Search() {
    let navigate = useNavigate();
    let [ctx, setCtx] = useContext(MyContext);
    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        let dataCtx = {user: storedUserData}
        axios.get("http://localhost:3000/products/").then((res) => {
            dataCtx = {...dataCtx, products: res.data}
        }).finally(() => {
            setCtx({...ctx, ...dataCtx})
        });
    }, [localStorage.getItem('userData')]);
    return (
        <>
            <div className="header-search pt-2 pt-md-0">
                <Formik
                    initialValues={
                        {
                            key: ""
                        }
                    }
                    onSubmit={(values) => {
                        let searchList = ctx.products;
                        searchList = searchList.filter((item) =>
                            item.name.toLowerCase().includes(values.key.toLowerCase()) || item.category.name.toLowerCase().includes(values.key.toLowerCase())
                        );
                        setCtx({...ctx,searchRs:searchList, key:values.key});
                        navigate('/search-results');
                    }}
                >
                    <Form>
                        <div className='input-group'>
                            <Field className="form-control ajax_search" id="name_search" name="key" />
                            <div className='input-group-append'>
                                <button className="btn btn-outline-secondary" type=""><i className="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
