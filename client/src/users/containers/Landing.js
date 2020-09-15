import React, { useState } from 'react';

import HeaderLogo from '../../components/Header/HeaderLogo';
import Modal from '../../components/Modal/Modal';
import RectangleButton from '../../components/Button/RectangleButton';

import './Landing.scss'

const Landing = () => {

    const [showModal, setShowModal] = useState(false);
    const [showContent, setShowContent] = useState('');

    const openNewUser = () => {
        setShowContent('newUser')
        setShowModal(true)
    };
    const openLogIn = () => {
        setShowContent('logIn')
        setShowModal(true)
    };
    const closeModalHandler = () => {
        setShowContent('');
        setShowModal(false)
    };


    return (
        <React.Fragment>
            <Modal show={showModal} onCancel={closeModalHandler} content={showContent} />
            <div className="landing-layout">
                <HeaderLogo />
                <div>
                    <RectangleButton buttonClasses={"mainMenuButton"} onClick={openNewUser}>New User</RectangleButton>
                    <RectangleButton buttonClasses={"mainMenuButton"} onClick={openLogIn}>Log In</RectangleButton>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Landing;