import React from 'react';
import './Modal.css';

import Auxilary from '../Hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {


    return (
        <Auxilary>

            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className="main-modal-style"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>

                <div className="row">
                    <div className="col-md-12 offset-md-11">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                            onClick={props.modalClosed}
                        ></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {props.children}
                    </div>
                </div>
            </div>

        </Auxilary>
    )
};

export default Modal;