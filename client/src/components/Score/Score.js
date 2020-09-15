import React from 'react';

const Score = ({ rightScore, wrongScore}) => {
    return (
        <div className="bottom">
            <h3>Current Score:</h3>
            <div className="score">
                <div className="rightScore">{ rightScore }</div>
                <p> - </p>
                <div className="wrongScore">{ wrongScore}</div>
            </div>
        </div>
    )
}

export default Score;