import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'
import InfoModal from './InfoModal'
import '../card.css'
import logo from '../logo.svg'

class FirstToDo extends Component {
    static contextType = UserContext;

    state = {
        index: -1,
        display: '',
        thirdClass: "",
        zIndex: "",
        firstToDo: [],
        descDisplay: "",
        modalShow: false
    }
    //bring the data from context
    componentDidUpdate() {
        let data = this.context;
        if (data.dares) {
            if (this.state.firstToDo.length === 0)
                this.setState({
                    firstToDo: data.dares.firstToDo.sort(() => Math.random() - 0.5),
                    display: '',
                })
        }
    }


    //next dare button
    handleClick = e => {
        e.preventDefault()
        this.setState(prevState => {
            let display = prevState.display
            if (prevState.index === prevState.firstToDo.length) {
                display = "none"
            }
            return {
                index: prevState.index + 1,
                display: display,
                thirdClass: "animate__animated animate__fadeOutTopRight animate__faster",
                zIndex: 9,
                descDisplay: "none"
            }
        })
        setTimeout(() => {
            this.setState({
                thirdClass: "animate__animated animate__fadeInTopRight animate__faster",
                zIndex: 100
            })
        }, 300)
    }

    setModalShow = (toggleShow) => {
        this.setState({ modalShow: toggleShow })
    }

    render() {
        return (
            <>
                <div className="row justify-content-start">
                    <button className="info-btn main-games green col-1 text-right" onClick={() => this.setModalShow(true)}>تفضل هنا</button>
                </div>

                <Link to="/dares" className="return-btn "> تبي ترجع؟</Link>
                <div className="cardContainer row justify-content-center" >
                    <div className="card" >
                        <p style={{ display: this.state.descDisplay }}>التعليمات</p>
                        <p style={{ display: this.state.descDisplay }}>
                            تنفع لمجموعة اشخاص يكون واحد فيهم حكم ويقرا التحديات عشان يقولها للاعبين والذيب فيهم بيخلص التحدي اول.

                        </p>

                    </div>
                    <div className={`secound ${this.state.thirdClass}`} style={{ zIndex: this.state.zIndex }}>
                        <p>  {this.state.firstToDo[this.state.index]}</p>
                        <img src={logo} className="card-ship" alt="اللوقو" />

                    </div>
                </div>
                <button className="main-games green hvr-bob" onClick={this.handleClick} style={{ display: this.state.display }}>التالي</button>
                <InfoModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                />

            </>

        );
    }
}

export default FirstToDo;
