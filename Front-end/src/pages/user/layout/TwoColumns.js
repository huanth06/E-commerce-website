import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import UserSidebar from '../../../components/user/left-sidebar/UserSidebar'
export default function TwoColumns() {
    return (
        <>
            <div className='row'>
                <aside class="col-12 col-md-3" id="left-sidebar">
                    <UserSidebar />
                </aside>
                <div className="col-12 col-md-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}
