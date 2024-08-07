import React, {useContext} from 'react'
import { MyContext } from '../../../MyContext'
import {Link} from 'react-router-dom'

export default function HiUser() {
    let [ctx,setCtx] = useContext(MyContext);
    return (
        <>
            <>
                <div className='col-12'>
                    <hr />
                    <h2>Hi <span className='text-capitalize'> {ctx.user}!</span></h2>
                    <Link to="/" class="btn btn-large btn-primary" title="Home Page"><i class="fa fa-home"></i> Home</Link>
                </div>
            </>
        </>
    )
}
