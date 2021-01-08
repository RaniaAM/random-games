import React, { Component } from 'react'
import { Link, LinkNav } from 'react-router-dom'

class Wink extends Component {
    state = {
        names: [],
        characters: ["شايب", "ولد"],
        display: "",
        start: false,
        namesOutput: null

    }
    addPlayer = (e) => {
        e.preventDefault()

        this.setState({
            names: [...this.state.names, ""]
        })
    }
    handleChange = (e, index) => {
        e.preventDefault()
        this.state.names[index] = e.target.value
        this.setState({ names: this.state.names })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        //hide form
        this.setState({
            display: "none"
        })

        //random
        let leng = this.state.names.length - 2
        for (let i = 0; i < leng; i++) {
            this.setState((prevState) => {
                return {
                    characters: [...prevState.characters, "بنت"],
                    display: "none"
                }
            })
        }
        this.setState({
            start: true
        })

    }
    randomPick = () => {
        let characters = [...this.state.characters]
        let lengt = characters.length
        const newArray = []
    }
    render() {


        // this.state.start ? this.randomPick() : null

        return (
            <>
                <Link to="/"> رجوع</Link>
                <form onSubmit={this.handleSubmit} style={{ display: this.state.display }}>
                    {
                        this.state.names.map((name, index) => {
                            return (
                                <div key={index}>
                                    <input type="text" value={name} onChange={(e) => this.handleChange(e, index)}></input>
                                </div>
                            )
                        })
                    }


                    <button onClick={(e) => this.addPlayer(e)}>لاعب جديد</button>
                    <button type="submit">يلا نلعب</button>

                </form>
                <button onClick={this.randomPick}>Test</button>

                {this.state.namesOutput}

            </>
        );
    }
}

export default Wink;
