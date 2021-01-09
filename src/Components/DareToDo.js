import React, { Component } from 'react'
// import data from './DataSource'
import firebase from '.././firebase.js';
import { Link } from 'react-router-dom'

class DareToDo extends Component {
    state = {
        index: 0,
        display: '',
        playerCard: null
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('data');
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({ dareToDo: data.dares.dareToDo.sort(() => Math.random() - 0.5) })
        });
    }

    handleClick = e => {
        e.preventDefault()
        this.setState(prevState => {
            return { index: prevState.index + 1, playerCard: prevState.dareToDo[this.state.index] }
        })
        if (this.state.index === this.state.dareToDo.length - 1) {
            this.setState({ display: 'none' })
        }
    }

    render() {

        return (
            <>
                <Link to="/dares"> رجوع</Link>
                <button onClick={this.handleClick} style={{ display: this.state.display }}>التالي</button>
                <div>
                    {this.state.playerCard}
                </div>
            </>
        );
    }
}

export default DareToDo;
