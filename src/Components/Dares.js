import React from 'react'
import { Link } from 'react-router-dom'
import InfoModal from './InfoModal'
import '../styles/buttons.css'
// Transform to Function
function Dares() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="page-container">
                <div className="row justify-content-start">
                    <button className="info-btn col-1 text-right" onClick={() => setModalShow(true)}>اعرفنا اكثر</button>
                    <Link className="return-btn col-6" to="/"> تبي ترجع؟</Link>
                </div>
                <div className="row justify-content-center">

                    <h1 className="logo-name animate__animated animate-wobble col-6 " > قدها؟ </h1>
                </div>
                <div className="nav-list" ></div>
                <div className="row justify-content-center align-items-center‏ ">

                    <div className="col-3 ">
                        <Link className="main-games green hvr-bob" to="/firstToDo">لك ولا للذيب</Link>
                    </div>

                    <div className="col-3 ">
                        <Link className="main-games green hvr-bob" to="/dareToDo">اتحداك تسويها</Link>
                    </div>

                </div>

                <InfoModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </>
    );

}

export default Dares;
