import React from 'react'
import Modal from 'react-bootstrap/Modal'

function InfoModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    على الطاير؟
                </Modal.Title>
                <i style={{ cursor: "pointer" }} onClick={props.onHide} className="fas fa-times"></i>
            </Modal.Header>
            <Modal.Body>
                {/* <h4>من نحن</h4> */}
                <p>
                    <br />
                    <h5>لعبة على الطاير</h5>
                    <br />
                    بتخليك تعرف الي حولك اذا هم قدها ولا لا
                    <br />
                    تقدر تلعب معهم لعبة قدها وتتحداهم  وعندك لعبة على طرف لساني تختبر ذاكرتهم وراح تمتلك كل الصلاحيات اذا صرت شايب ب لعبة غمزة وكشفت الولد
                    <br />
                </p>
                <details>
                    <summary>لك ولا للذيب</summary>
                    <p>
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </details>
                <details>
                    <summary>أتحداك أسويها</summary>
                    <p>
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </details>
                <details>
                    <summary>حزر فزر</summary>
                    <p>
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </details>
                <details>
                    <summary>حزر الشي</summary>
                    <p>
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </details>
                <details>
                    <summary>غمزة</summary>
                    <p>
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </details>
            </Modal.Body>
        </Modal>
    );
}

export default InfoModal