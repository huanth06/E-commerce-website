import React from 'react'
import {Link} from 'react-router-dom'

export default function UserSidebarInformation() {
    return (
        <>
            <div className="card d-none d-md-block my-2">
                <div className="card-header"><h3 className="h4 mb-0">Information</h3></div>
                <div className="list-group list-group-flush" role="navigation" aria-label="Information menu"><div className="position-relative border-bottom ">
                    <Link className="text-dark list-group-item list-group-item-action" to="#">About Us</Link>
                </div><div className="position-relative border-bottom ">
                        <Link className="text-dark list-group-item list-group-item-action" to="#">Returns Policy</Link>
                    </div><div className="position-relative border-bottom ">
                        <Link className="text-dark list-group-item list-group-item-action" to="#">Contact Us</Link>
                    </div></div>
            </div>
        </>
    )
}
