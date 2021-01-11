import React, { Component } from 'react'
import UserContext from './UserContext'
import { Link } from 'react-router-dom'
import InfoModal from './InfoModal'

class GuessWho extends Component {
    static contextType = UserContext;
    state = {
        guessWho: [],
        items: null,
        index: -1,
        display: '',
        modalShow: false
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

    setModalShow = (toggleShow) => {
        this.setState({ modalShow: toggleShow })
    }

    render() {
        // const [modalShow, setModalShow] = React.useState(false);
        let output
        output = this.state.guessWho.map((item, index) => {
            return <div key={index}> {item.name} <img src={item.img} /> </div>
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


export default GuessWho;
