import React from 'react'
import { Link } from 'react-router-dom'
import InfoModal from './InfoModal'
// Transform to Function
function Guess() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="row justify-content-start">
                <button className="info-btn main-games green col-1 text-right" onClick={() => setModalShow(true)}>تفضل هنا</button>
            </div>
            <Link to="/"> رجوع</Link>

            <h1 className="logo-name animate__animated animate-wobble"> على طرف لساني</h1>
            <div className="row justify-content-center align-items-center‏">
                <div className="col-3 ">
                    <Link className="main-games green hvr-bob" to="/guessWho">حزر فزر</Link>
                </div>
                <div className="col-3 ">
                    <Link className="main-games green hvr-bob" to="/guessTheThing">حزر الشي</Link>
                </div>
            </div>

            <InfoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );

}

export default Guess;
