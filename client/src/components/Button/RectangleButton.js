import React from 'react';

import './RectangleButton.scss';

const RectangleButton = props => {
    return (
        <button className={`rectangleButton ${props.buttonClasses}`} onClick={props.onClick}>{props.children}</button>
    )
}

export default RectangleButton;