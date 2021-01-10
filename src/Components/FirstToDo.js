import React, { Component } from 'react'
// import data from './DataSource'
import firebase from '.././firebase.js';
import { Link } from 'react-router-dom'


class FirstToDo extends Component {
    state = {
        index: 0,
        display: '',
        playerCard: null,
        transform: '',
        thirdClass: "",
        zIndex: ""

    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('data');
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            this.setState({ firstToDo: data.dares.firstToDo.sort(() => Math.random() - 0.5) })
        });

    }

    handleClick = e => {
        e.preventDefault()
        if (this.state.firstToDo) {
            this.setState(prevState => {
                return {
                    index: prevState.index + 1, playerCard: prevState.firstToDo[this.state.index], test: !prevState.test

                }
            })

            if (this.state.firstToDo.length > 0) {
                if (this.state.index === this.state.firstToDo.length - 1) {
                    this.setState({ display: 'none' })
                }
            }

            this.setState({
                thirdClass: "animate__animated animate__fadeOutTopRight animate__faster",
                zIndex: 9

            })
            setTimeout(() => {
                this.setState({
                    thirdClass: "animate__animated animate__fadeInTopRight animate__faster",
                    zIndex: 100
                })
            }, 300)
        }
    }
    render() {

        return (
            <>


                <Link to="/dares"> رجوع</Link>

                <div className="cardContainer" >
                    <div className="card" >   </div>
                    <div className={`secound ${this.state.thirdClass}`} style={{ transform: this.state.transform, zIndex: this.state.zIndex }}>
                        {this.state.playerCard}
                    </div>
                </div>
                <button className="game-button green" onClick={this.handleClick} style={{ display: this.state.display }}>التالي</button>


            </>

        );
    }
}

export default FirstToDo;
