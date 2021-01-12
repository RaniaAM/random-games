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
        modalShow: false,
        time: 0,
        timeDisplay: 'none'
    }

    //bring the data from context
    componentDidUpdate() {
        let data = this.context;
        if (data)
            if (data.guess) {
                if (this.state.guessTheThing.length === 0)
                    this.setState({ guessTheThing: data.guess.guessTheThing.sort(() => Math.random() - 0.5) })
            }
    }

    handleClick = e => {
        if (e)
            e.preventDefault()

        this.setState(prevState => {
            let display = prevState.display
            if (prevState.index === prevState.guessTheThing.length) {
                display = "none"
            }
            return {
                index: prevState.index + 1,
                display: display,
                time: 15,
                timeDisplay: ''
            }
        })

        let interval = setInterval(() => {

            if (this.state.time <= 0 || this.state.index === this.state.guessTheThing.length) {
                clearInterval(interval);
                this.setState({
                    timeDisplay: 'none'
                })
            }

            this.setState(prevState => ({
                time: prevState.time - 1
            }))

        }, 1000);

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
                    <button className="info-btn col-1 text-right" onClick={() => this.setModalShow(true)}>اعرفنا اكثر</button>
                    <Link to="/guess" className="return-btn">تبي ترجع</Link>
                </div>
                {/* timer */}
                <div class="countdown" style={{ display: this.state.timeDisplay }}>
                    <div class="countdown-number"><p style={{ display: this.state.display }}>{this.state.time}</p></div>
                    <svg>
                        <circle r="18" cx="20" cy="20"></circle>
                    </svg>
                </div>
                {/* next button */}
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
