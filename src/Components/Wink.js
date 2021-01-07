import React, { Component } from 'react'
import { Link, LinkNav } from 'react-router-dom'

class Wink extends Component {
    render() {
        return (
            <>
                <Link to="/"> رجوع</Link>
                <h1> Wink</h1>
            </>
        );
    }
}

export default Wink;
