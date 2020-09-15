import React from 'react';

class Score extends React.Component {
    render() {
        return (
            <div className="bottom">
                <h3>Current Score:</h3>
                <div className="score">
                    <div className="rightScore">0</div>
                    <p> - </p>
                    <div className="wrongScore">0</div>
                </div>
            </div>
        )
    }
}

export default Score;