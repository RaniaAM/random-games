import React, { Component } from 'react'
import UserContext from './UserContext'
import { Link } from 'react-router-dom'
import InfoModal from './InfoModal'

class GuessTheThing extends Component {
    static contextType = UserContext;
    state = {
        guessTheThing: [],
        items: null,
        index: -1,
        display: '',
        modalShow: false
    }

    //bring the data from context
    componentDidUpdate() {
        let data = this.context;
        if (data.guess) {
            if (this.state.guessTheThing.length === 0)
                this.setState({ guessTheThing: data.guess.guessTheThing.sort(() => Math.random() - 0.5) })
        }
    }
    //next guess button
    handleClick = e => {
        e.preventDefault()

        this.setState(prevState => {
            let display = prevState.display
            if (prevState.index === prevState.guessTheThing.length) {
                display = "none"
            }
            return {
                index: prevState.index + 1,
                display: display
            }
        })

    }

    setModalShow = (toggleShow) => {
        this.setState({ modalShow: toggleShow })
    }

    render() {
        let output
        output = this.state.guessTheThing.map((item, index) => {
            return <div key={index}> {item.name} <p>{item.menu}</p> </div>
        })
        return (
            <>
                <div className="row justify-content-start">
                    <button className="info-btn main-games green col-1 text-right" onClick={() => this.setModalShow(true)}>تفضل هنا</button>
                </div>
                <Link to="/guess"> رجوع</Link>
                <button onClick={this.handleClick} style={{ display: this.state.display }}>التالي</button>
                <div>
                    {output[this.state.index]}
                </div>
                <InfoModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                />
            </>
        );
    }
}

export default GuessTheThing;
