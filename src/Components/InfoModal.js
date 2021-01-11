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
                    وش هي لعبة على الطايــــر ؟
                </Modal.Title>
                <i style={{ cursor: "pointer" }} onClick={props.onHide} className="fas fa-times"></i>
            </Modal.Header>
            <Modal.Body>

                {/* Info about Our Game */}
                <p>
                    بتخليك تعرف الي حولك اذا هم قدها ولا لا وتقدر تلعب معهم لعبة قدها وتتحداهم وعندك لعبة على طرف لساني تختبر ذاكرتهم وراح تمتلك كل الصلاحيات اذا صرت شايب ب لعبة غمزة وكشفت الولد.
                </p>

                {/* Dares */}
                <details>
                    <summary><b>قدها ؟</b> </summary>
                    <details>
                        <summary>لك ولا للذيب</summary>
                        <p>
                            تنفع لمجموعة اشخاص يكون واحد فيهم حكم ويقرا التحديات عشان يقولها للاعبين والذيب فيهم بيخلص التحدي اول.
                    </p>
                    </details>
                    <details>
                        <summary>اتحداك تصمل</summary>
                        <p>
                            تنفع لمجموعة اشخاص تمر التحديات عليهم واحد واحد والكل مجبور ينفذ ولا ترا بيطلع من اللعبة وراح يتم تدشين لقب الكفو على الصامل.</p>
                    </details>
                </details>



                {/* Guess */}
                <details>
                    <summary><b>على طرف لساني</b> </summary>
                    <details>

                        <summary>حزر فزر</summary>
                        <p>
                            مافيها شروط بس حاول تلمح لخويك او للباقين مين شفت وخلهم يجيبونها صح.
                    </p>
                    </details>


                    <details>
                        <summary>حزر الشي</summary>
                        <p>
                            بتسأل الي بيلعبون اسئلة ولازم يجاوبون قبل مايداهمهم الوقت.. بس ترا ساعدناك وعطيناك اجابات تنقذك لو توهقت وماجاء على بالك شيء، ولا تقولها! احتفظ فيها لين ينتهي الوقت.
                    </p>
                    </details>
                </details>

                {/* Wink */}
                <details>
                    <summary><b>غمزة</b> </summary>
                    <p>

                        اللعبة تتكون من ثلاث شخصيات الي هي شايب و ولد وبنات وراح تدخلون اسمائكم وكل واحد وحظه وش بيجيه، بس ترا لو جاك
                   </p>
                    <ul>

                        <li>  <b>الشايب :</b> حاول تقفط الولد قبل لا يغمز لكل البنات</li>
                        <li><b>الولد :</b>  حاول ماتبين انك ولد عشان مايقفطك الشايب وتقدر تختم البنات بغمزتك</li>
                        <li><b>البنت :</b> اذا غمز لك الولد لاتبينين مين هو بس قولي انغمز لي</li>
                    </ul>

                </details>
            </Modal.Body>
        </Modal>
    );
}

export default InfoModal