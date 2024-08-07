import React from 'react'
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'
import { useContext } from 'react'
import { MyContext } from '../../../MyContext'
import { Link, Outlet } from 'react-router-dom'

export default function MyAcct() {
    let [ctx, setCtx] = useContext(MyContext);
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className="page-header"><h1>My Account {ctx.user &&
                        (
                            <>
                                (<Link to={"/_myacct/login-register"} className='small' onClick={()=>{
                                    localStorage.setItem('userData', "");
                                }}>Logout</Link >)
                            </>
                        )
                    }</h1></div>
                    <div className='row'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    )
}
