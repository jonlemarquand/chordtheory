import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderLogo.scss';

const HeaderLogo = props => {
    return (
        <header>
            <Link to="/">
                <div className={`logo ${props.headerClass}`}></div>
            </Link>
        </header>
    )
};

export default HeaderLogo;