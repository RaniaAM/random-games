import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../navList.css';
import InfoModal from './InfoModal'

function NavList() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="row justify-content-start">
                <button className="info-btn main-games green col-1 text-right" onClick={() => setModalShow(true)}>تفضل هنا</button>
            </div>

            <h1 className="logo-name">على <span className="yellow-text">الطايــــر</span></h1>

            <img src={logo} className="logo animate__animated animate__bounceInUp" alt="اللوقو" />

            <div className="row justify-content-center align-items-center‏">

                <div className="col-3 ">
                    <Link className="main-games green hvr-bob" to="/dares"> قدها ؟</Link>
                </div>

                <div className="col-3">
                    <Link className="main-games  green hvr-bob" to="/guess"> على طرف لساني</Link>
                </div>

                <div className="col-3">
                    <Link className="main-games  green hvr-bob" to="/wink"> غمزة</Link>
                </div>

                <InfoModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </>

    );

}

export default NavList;
