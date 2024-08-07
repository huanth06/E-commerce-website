import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function UserSidebarCategories() {
    let [cates, setCates] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/categories").then((res) => {
            setCates(res.data);
        });
    }, []);
    return (
        <>
            <div className="card d-none d-md-block mb-2">
                <div className="card-header"><h3 className="h4 mb-0">Categories</h3></div>
                <div className="list-group list-group-flush" role="navigation" aria-label="Category menu">
                    {cates.map(category => (
                        <div key={category.id} className="position-relative border-bottom ">
                            <Link className="text-dark list-group-item list-group-item-action" to={'/category/'+category.name+'/'+category.id} title='{category.name}'>{category.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
