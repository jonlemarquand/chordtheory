import React from 'react';

const ScoreButton = (props) => {
    return (
        <div className="scorebutton">
            <img className={props.styling} src={props.url} alt={props.alt}></img>
        </div>
    );
}

export default ScoreButton;