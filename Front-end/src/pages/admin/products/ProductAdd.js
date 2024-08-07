import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage";
import storage from '../../../components/firebase/firebaseConfig'

export default function ProductAdd() {
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/categories').then(x => {
            setCates(x.data)
        })
    }, [])
    let navigate = useNavigate();
    const [file, setFile] = useState("");
    const [urlImg, setUrlImg] = useState([]);
    const [percent, setPercent] = useState();
    // Handles input change event and updates state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    function handleUpload() {
        if (!file) {
            alert("Please choose a file first!")
        } else {
            const storageRef = ref(storage, `/files/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    // update progress
                    setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setUrlImg([...urlImg, url]);
                        alert('File Uploaded Successfully!!!');
                    });
                }
            );
        }
    }
    return (
        <>
            <div className='product-add mt-4'>
                <div className='page-title'>
                    <h1>Let's Create A Product</h1>
                    <button type="" className="btn btn-light"><Link to={'/_cpanel/products'}>Back To List</Link></button>
                </div>
                <hr />
                <Formik
                    initialValues={
                        {
                            name: '',
                            price: '',
                            quantity: ''
                        }
                    }

                    onSubmit={(values) => {
                        let category = cates.find(e => e.id == selected);
                        if (category === undefined) {
                            category = cates[0];
                        }
                        let images = urlImg;
                        values = { ...values, category, images };
                        axios.post('http://localhost:3000/products', values).then(x => {
                            alert('Product Added Successfully!');
                            navigate('/_cpanel/products');
                        })
                    }}
                >
                    <Form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <Field id="name" className="form-control" type="text" name='name'  ></Field>
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <Field id="price" className="form-control" type="text" name='price'  ></Field>
                        </div>
                        <div class="form-group">
                            <label for="quantity">Quantity</label>
                            <Field id="quantity" className="form-control" type="number" name='quantity'  ></Field>
                        </div>
                        <div class="form-group">
                            <label for="category">Categories</label>
                            <select id="category" class="form-control" onChange={(e) => {
                                setSelected(e.target.value);
                            }}>
                                {cates.map(e => (<option value={e.id}>{e.name}</option>))}
                            </select>
                        </div>
                        <div className='form-group'>
                            <label for="product-image">Image</label>
                            <div className='d-block'>
                                <input type="file" accept="image/*" onChange={handleChange} />
                                <div className='btn btn-outline-dark' onClick={() => { handleUpload() }}>Upload to Firebase</div>
                            </div>
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
