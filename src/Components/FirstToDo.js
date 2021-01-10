import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'


class FirstToDo extends Component {
    static contextType = UserContext;

    state = {
        index: -1,
        display: '',
        thirdClass: "",
        zIndex: "",
        firstToDo: [],
        descDisplay: ""

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

        {
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
    }


    render() {
        return (
            <>
                <Link to="/dares"> رجوع</Link>
                <div className="cardContainer" >
                    <div className="card" >
                        <p style={{ display: this.state.descDisplay }}>التعليمات</p>
                        <p style={{ display: this.state.descDisplay }}>
                            تعتبر طار من عقلي لعبة تساعدك على تحدي لاعبين آخرين لذكر عبارات عشوائية نقولها عادةً لكننا ننساها غالباً عندما نحتاج إلى قولها.
                        </p>
                        <p style={{ display: this.state.descDisplay }}>اللاعبون اللذين يتمتعون برموز مماثلة، يتنافسون على تسمية شيء عادي مثل علامة الشامبو التجارية أو الممثل الشهير</p>


                    </div>
                    <div className={`secound ${this.state.thirdClass}`} style={{ zIndex: this.state.zIndex }}>

                        {this.state.firstToDo[this.state.index]}
                    </div>
                </div>
                <button className="game-button green" onClick={this.handleClick} style={{ display: this.state.display }}>التالي</button>


            </>

        );
    }
}

export default FirstToDo;
