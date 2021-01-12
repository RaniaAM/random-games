import React, { Component } from 'react'
import logo from '../logo.svg'

class Spinner extends Component {
    render() {
        return (
            <div style={{ height: "800px" }}>
                <h1 className="logo-name">ثواني...</h1>
                <img src={logo} className="animate__infinite animate__animated animate__bounceInUp animate__slow" width="250px" ></img>
            </div>
        );
    }
}
export default Spinner