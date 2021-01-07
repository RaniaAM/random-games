import React, { Component } from 'react'
import { Link, LinkNav } from 'react-router-dom'

class Wink extends Component {
    state = {
        numOfPlayers: 3,
        newForm: null,
        names: []

    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    handleSubmit = e => {
        e.preventDefault();
        const num = parseInt(this.state.numOfPlayers)
        let array = new Array(num).fill(this.state.numOfPlayers);
        let arrayNames = [];

        for (let i = 0; i < this.state.numOfPlayers; i++) {
            let { name } = e.target
            arrayNames.push(name.value)

            console.log(name)
        }

        this.setState({
            names: arrayNames
        })

    }


    handleClick = e => {
        e.preventDefault();
        const num = parseInt(this.state.numOfPlayers)
        let array = new Array(num).fill(this.state.numOfPlayers);
        this.setState({
            newForm: array.map((item, index) => (

                <>
                    <br />
                    <label> اللاعب {index + 1} </label>
                    <input type="text"
                        name={index} />

                    <br />
                </>

            ))
        })
        // for (let i = 0; i < this.state.numOfPlayers; i++) {

        // }
        // console.log(newForm)
    }

    render() {
        console.log(this.state.newForm)
        return (
            <>
                <Link to="/"> رجوع</Link>
                <h1> غمزة</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>عدد اللاعبين</label>
                    <input type="number" value={this.state.numOfPlayers}
                        onChange={this.handleChange}
                        name="numOfPlayers" />
                    <button onClick={this.handleClick}> التالي</button>‏


                    {this.state.newForm}
                    <button type="submit">يلا نلعب</button>

                </form>
            </>
        );
    }
}

export default Wink;
