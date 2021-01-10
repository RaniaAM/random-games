import React from 'react'
import { Link } from 'react-router-dom'


// Transform to Function
function Dares() {

    return (
        <>
            <div className="row main">
                <Link className="return col-6 " to="/"> تبي ترجع؟</Link>
                <h1 className="logo-name animate__animated animate-wobble col-6 " > قدها؟ </h1>
            </div>



            <div className="row justify-content-center align-items-center‏">
                <div className="col-3 ">
                    <Link className="hvr-buzz" to="/firstToDo">لك ولا للذيب</Link>
                </div>
                <div className="col-3 ">
                    <Link className="hvr-buzz" to="/dareToDo">اتحداك تسويها</Link>
                </div>

            </div>


        </>
    );

}

export default Dares;
