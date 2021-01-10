import React from 'react'
import { Link } from 'react-router-dom'

// Transform to Function
function Guess() {

    return (
        <>
            <Link to="/"> رجوع</Link>
            <h1 className="logo-name animate__animated animate-wobble"> على طرف لساني</h1>
            <div className="row justify-content-center align-items-center‏">
                <div className="col-3 ">
                    <Link className="hvr-buzz" to="/guessWho">حزر فزر</Link>
                </div>
                <div className="col-3 ">
                    <Link className="hvr-buzz" to="/guessTheThing">حزر الشي</Link>
                </div>
            </div>
        </>
    );

}

export default Guess;
