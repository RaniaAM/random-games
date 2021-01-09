import React from 'react'
import { Link } from 'react-router-dom'

// Transform to Function
function Guess() {

    return (
        <>
            <Link to="/"> رجوع</Link>
            <br />
            <Link to="/guessWho">حزر فزر</Link>
            <br />
            <Link to="/guessTheThing">حزر الشي</Link>
            <h1> على طرف لساني</h1>
        </>
    );

}

export default Guess;
