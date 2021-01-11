import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InfoModal from './InfoModal'

class Wink extends Component {
    state = {
        names: ['', '', ''],
        characters: ["شايب", "ولد"],
        display: "",
        display2: "block",
        start: false,
        namesOutput: null,
        index: 0,
        playerCard: null

    }

    addPlayer = (e) => {
        e.preventDefault()

        this.setState({
            names: [...this.state.names, ""]
        })
    }

    handleChange = (e, index) => {
        e.preventDefault()
        this.state.names[index] = e.target.value
        this.setState({ names: this.state.names })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //hide form
        this.setState({
            display: "none"
        })

        //random
        let leng = this.state.names.length - 2
        for (let i = 0; i < leng; i++) {
            this.setState((prevState) => {
                return {
                    characters: [...prevState.characters, "بنت"],
                    display: "none"
                }
            })
        }
        this.setState({
            start: true
        })
    }

    randomPick = () => {
        let characters = [...this.state.characters]
        characters = characters.sort(() => Math.random() - 0.5)
        let names = [...this.state.names]
        const output = characters.map((ele, index) => {
            return <div className="card">
                أنت يا {names[index]}
                &nbsp; ‏تراك {characters[index]}
            </div>
        })
        this.setState({ namesOutput: output })

    }

    handleClick = e => {
        e.preventDefault()
        this.setState(prevState => {
            return { index: prevState.index + 1, playerCard: prevState.namesOutput[this.state.index] }
        })
        if (this.state.index === this.state.namesOutput.length - 1) {
            this.setState({ display2: 'none' })
        }
    }

    setModalShow = (toggleShow) => {
        this.setState({ modalShow: toggleShow })
    }
    render() {
        return (
            <>
                <div className="row justify-content-start">
                    <button className="info-btn col-1 text-right" onClick={() => this.setModalShow(true)}>اعرفنا اكثر</button>
                    <Link to="/" className="return-btn">تبي ترجع</Link>
                </div>
                <form onSubmit={this.handleSubmit} style={{ display: this.state.display }}>

                    {
                        this.state.names.map((name, index) => {
                            return (
                                <div key={index}>
                                    <input type="text" value={name} onChange={(e) => this.handleChange(e, index)}></input>
                                </div>
                            )
                        })
                    }


                    <button onClick={(e) => this.addPlayer(e)}>لاعب جديد</button>
                    <button type="submit">يلا نلعب</button>

                </form>
                <button onClick={this.randomPick}>Test</button>
                <br />
                <button onClick={this.handleClick} style={{ display: this.state.display2 }}>Click</button>
                <div>
                    {this.state.playerCard}
                </div>
                <InfoModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                />
            </>
        );
    }
}

export default Wink;
