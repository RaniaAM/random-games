import React from 'react'
import { Link } from 'react-router-dom'


// Transform to Function
function Dares() {

    return (
        <>
            <Link to="/"> رجوع</Link>
            <br />
            <Link to="/firstToDo">لك ولا للذيب</Link>
            <br />
            <Link to="/dareToDo">اتحداك تسويها</Link>
            <h1> قدها؟ </h1>
        </>
    );

}

export default Dares;
