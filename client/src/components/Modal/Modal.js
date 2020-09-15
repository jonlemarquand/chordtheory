import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import HeaderLogo from '../Header/HeaderLogo';
import Input from '../FormElements/Input';
import './Modal.scss'

const ModalOverlay = props => {
    const content = props.content;

    const userRegistration = (
        <div className={`modal ${props.ClassName}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <HeaderLogo headerClass="small" />
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    <Input type="text" label="Username" element="input" autocomplete="username" />
                    <Input type="text" label="Email" element="input" autocomplete="email" />
                    <Input type="password" label="Password" element="input" autocomplete="new-password" />
                    <Input type="password" label="Confirm Password" element="input" autocomplete="new-password" />
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    )
    const userLogIn = (
        <div className={`modal ${props.ClassName}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>Welcome back old friend!</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
                <div className={`modal__content ${props.contentClasss}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    )

    const defaultContent = (
        <div className={`modal ${props.ClassName}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
                <div className={`modal__content ${props.contentClasss}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    );
    if (content === 'newUser') {
        return ReactDOM.createPortal(userRegistration, document.getElementById('modal-hook'));
    } else if (content === 'logIn') {
        return ReactDOM.createPortal(userLogIn, document.getElementById('modal-hook'));
    } else {
        return ReactDOM.createPortal(defaultContent, document.getElementById('modal-hook'));
    }
};

const Modal = props => {
    return <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
            <ModalOverlay {...props} />
        </CSSTransition>
    </React.Fragment>
};

export default Modal;