import React, { Component } from 'react'
import { Link, LinkNav } from 'react-router-dom'

class Guess extends Component {
    render() {
        return (
            <>
                <Link to="/"> رجوع</Link>
                <h1> Guess</h1>
            </>
        );
    }
}

export default Guess;
