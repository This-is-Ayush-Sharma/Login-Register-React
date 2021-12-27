import React from 'react'
import './Style.css'
import { deleteCookie } from '../cookerMgr/delete';
import { useHistory } from 'react-router-dom';
import { getCookie } from '../cookerMgr/verify'
export default function Home() {
    let history = new useHistory();
    const logout = () => {
        deleteCookie("accesstoken");
        history.push("/");
    }

    return (
        <div>
            {
                getCookie("accesstoken") === null ? history.push('/') :
                <>
                    <div className='grdd'>
                        <button onClick={logout}>Logout</button>
                    </div>
                    <div className='grd'>
                        Welcome to Dashboard
                    </div>
                </>
            }
        </div>
    )
}
