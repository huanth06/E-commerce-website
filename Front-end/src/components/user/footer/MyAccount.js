import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../MyContext'

export default function MyAccount() {
    const [ctx,setCtx] = useContext(MyContext);
    return (
        <>
            <div className="col-12 col-md-4 text-md-left">
                <ul className="nav flex-column">
                    <li className="nav-item"><h4 className="nav-link py-0">My Account</h4></li>
                    <li className="nav-item"><Link to={ctx.user ? '/_myacct' : '/_myacct/login-register'} className="nav-link">{ctx?.user!=""?<span className="text-capitalize">{ctx.user}</span>:'Login/Register'}</Link></li>
                </ul>
            </div>
        </>
    )
}
