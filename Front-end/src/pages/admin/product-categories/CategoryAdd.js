import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function CategoryAdd() {
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/categories').then(x => {
            setCates(x.data)
        })
    }, [])
    let navigate = useNavigate();
    return (
        <>
            <div className='product-add mt-4'>
                <button type="" className="btn btn-light"><Link to={'/_cpanel/categories'}>Back To List</Link></button>
                <hr />
                <Formik
                    initialValues={
                        {
                            name: ''
                        }
                    }
                    
                    onSubmit={(values) => {
                        axios.post('http://localhost:3000/categories', values).then(x => {
                            alert('Category Added Successfully!');
                            navigate('/_cpanel/categories');
                        })
                    }}
                >
                    <Form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <Field id="name" className="form-control" type="text" name='name'  ></Field>
                        </div>
                        <div class="form-group">
                            <button className='btn btn-primary'>Add</button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </>
    )
}
