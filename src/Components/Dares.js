import React, { Component } from 'react'
import { Link, LinkNav } from 'react-router-dom'

class Dares extends Component {

    render() {
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
}

export default Dares;
