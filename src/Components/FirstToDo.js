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
        transform2: '',
        thirdClass: "third"

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
                    index: prevState.index + 1, playerCard: prevState.firstToDo[this.state.index]

                }
            })

            if (this.state.firstToDo.length > 0) {
                if (this.state.index === this.state.firstToDo.length - 1) {
                    this.setState({ display: 'none' })
                }
            }

            this.setState({
                transform: "rotate(-16deg) translateX(101%) translateY(-85%) scale(0.9) skewX(3deg) skewY(9deg)",
                // thirdClass: "third animate__animated animate__fadeInTopRight"
            })
            //  animate__animated animate__fadeOutTopRight

            this.setState({
                thirdClass: "third"

            })
            this.setState({
                thirdClass: "third animate__animated animate__fadeInTopRight"

            })


            //  else {
            //     this.setState({

            //         thirdClass: "third "

            //     })

            // }
        }
    }
    render() {

        return (
            <>


                <Link to="/dares"> رجوع</Link>


                <div className="card" >   {this.state.playerCard}   </div>
                <div className="secound" style={{ transform: this.state.transform }}>
                </div>
                <div className={this.state.thirdClass} > </div>
                <button className="game-button green" onClick={this.handleClick} style={{ display: this.state.display }}>التالي</button>


            </>

        );
    }
}

export default FirstToDo;
