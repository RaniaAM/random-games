import React from 'react'
import { Link } from 'react-router-dom'
import Purple from './Purple.png'


// Transform to Function
function NavList() {

    return (
        <>
            <div className="nav-list ">
                <h1 className="logo-name animate__animated animate-wobble">طب وتخير</h1>
                <img src={Purple} className="logo" alt="اللوقو" width="200px" height="200px" />

                <div className="row justify-content-center align-items-center‏">

                    <div className="col-3 ">
                        <Link className="hvr-buzz" to="/dares"> قدها ؟</Link>
                    </div>

                    <div className="col-3">
                        <Link className="hvr-buzz" to="/guess"> على طرف لساني</Link>
                    </div>

                    <div className="col-3">
                        <Link className="hvr-buzz" to="/wink"> غمزة</Link>
                    </div>

                </div>
            </div>
        </>

    );

}

export default NavList;
