import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'
import InfoModal from './InfoModal'
class DareToDo extends Component {
    static contextType = UserContext;
    state = {
        index: -1,
        display: '',
        dareToDo: []
    }
    //bring the data from context
    componentDidUpdate() {
        let data = this.context;
        if (this.state.dareToDo.length === 0)
            this.setState({ dareToDo: data.dares.dareToDo.sort(() => Math.random() - 0.5) })
    }
    //next dare button
    handleClick = e => {
        e.preventDefault()
        this.setState(prevState => {
            let display = prevState.display
            if (prevState.index === prevState.dareToDo.length) {
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
        return (
            <>
                <div className="row justify-content-start">
                    <button className="info-btn col-1 text-right" onClick={() => this.setModalShow(true)}>اعرفنا اكثر</button>
                    <Link to="/dares" className="return-btn">تبي ترجع</Link>
                </div>
                <button onClick={this.handleClick} style={{ display: this.state.display }}>التالي</button>
                <div>
                    {this.state.dareToDo[this.state.index]}
                </div>
                <InfoModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                />‏
            </>
        );
    }
}
export default DareToDo;