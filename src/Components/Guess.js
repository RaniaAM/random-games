import React, { Component } from 'react'
import { Link, LinkNav } from 'react-router-dom'

class Guess extends Component {
    render() {
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
}

export default Guess;
