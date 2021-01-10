import React, { Component } from 'react'
import UserContext from './UserContext'
import { Link } from 'react-router-dom'


class GuessWho extends Component {
    static contextType = UserContext;
    state = {
        guessWho: [],
        items: null,
        index: -1,
        display: '',
    }

    //bring the data from context
    componentDidUpdate() {
        let data = this.context;
        if (data.guess) {
            if (this.state.guessWho.length === 0)
                this.setState({ guessWho: data.guess.guessWho.sort(() => Math.random() - 0.5) })
        }
    }

    //next guess button
    handleClick = e => {
        e.preventDefault()

        this.setState(prevState => {
            let display = prevState.display
            if (prevState.index === prevState.guessWho.length) {
                display = "none"
            }
            return {
                index: prevState.index + 1,
                display: display
            }
        })

    }



    render() {
        let output
        output = this.state.guessWho.map((item, index) => {
            return <div key={index}> {item.name} <img src={item.img} /> </div>
        })
        return (
            <>
                <Link to="/guess"> رجوع</Link>
                <button onClick={this.handleClick} style={{ display: this.state.display }}>التالي</button>
                <div>
                    {output[this.state.index]}
                </div>
            </>
        );
    }
}


export default GuessWho;
