import React from 'react'
import {Link} from 'react-router-dom'

export default function Dashboard() {
    return (
        <>
            <div className='product-add mt-4'>
                <div className='page-title'>
                    <h1>Home</h1>
                    <button type="" className="btn btn-light"><Link to={'/_cpanel/products'}>Back To List</Link></button>
                </div>
                <hr />
            </div>
        </>
    )
}
