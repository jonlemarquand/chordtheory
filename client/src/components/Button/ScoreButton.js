import React from 'react';

const ScoreButton = (props) => {
    return (
        <div className="scorebutton" aria-label="button" onClick={props.changeScore} data-value={props.styling}>
            <img className={props.styling} src={props.url} alt={props.alt} data-value={props.styling}/>
        </div>
    );
}

export default ScoreButton;