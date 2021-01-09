import React, { Component } from 'react'
// import data from './DataSource'
import firebase from '.././firebase.js';
import { Link } from 'react-router-dom'


class GuessWho extends Component {
    state = {
        guessWho: [],
        items: null,
        index: 0,
        display: '',
        playerCard: null
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('data');
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({ guessWho: data.guess.guessWho.sort(() => Math.random() - 0.5) })
        });
    }

    handleClick = e => {
        e.preventDefault()

        this.setState(prevState => {
            return { index: prevState.index + 1, playerCard: prevState.items[this.state.index] }
        })
        if (this.state.index === this.state.items.length - 1) {
            this.setState({ display: 'none' })
        }
    }

    handleStart = e => {
        e.preventDefault()
        let output
        output = this.state.guessWho.map((item, index) => {
            return <div key={index}> {item.name} <img src={item.img} /> </div>
        })
        this.setState({ items: output })
    }

    render() {

        return (
            <>
                <Link to="/guess"> رجوع</Link>
                <button onClick={this.handleStart}>يلا نبدأ</button>
                <button onClick={this.handleClick} style={{ display: this.state.display }}>التالي</button>
                <div>
                    {this.state.playerCard}
                </div>
            </>
        );
    }
}


export default GuessWho;
