import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ShopByCategories() {
    let [cates, setCates] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/categories").then((res) => {
            setCates(res.data);
        });
    }, []);
    return (
        <>
            <div className="col-12 col-md-4 text-md-left">
                <ul className="nav flex-column">
                    <li className="nav-item"><h4 className="nav-link py-0">Shop by Categories</h4></li>
                    {cates.map(category => (
                        <li key={category.id} className="nav-item"><Link to={'/category/'+category.name+'/'+category.id} className="nav-link">{category.name}</Link></li>
                    ))}
                </ul>
            </div>
        </>
    )
}
