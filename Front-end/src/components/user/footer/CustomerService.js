import React from 'react'
import {Link} from 'react-router-dom'

export default function CustomerService() {
  return (
    <>
        <div className="col-12 col-md-4 text-md-left">
            <ul className="nav flex-column">
                <li className="nav-item"><h4 className="nav-link py-0">Customer Service</h4></li>
                <li className="nav-item"><Link to="#" className="nav-link">Shipping &amp; Delivery</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link">Returns</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link">About Us</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link">FAQs</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link">Contact Us</Link></li>
            </ul>
        </div>
    </>
  )
}
