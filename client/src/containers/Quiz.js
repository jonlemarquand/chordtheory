import React, { useState, useEffect } from 'react';

import HeaderLogo from '../components/Header/HeaderLogo';
import Score from '../components/Score/Score';
import ScoreButton from '../components/Button/ScoreButton';

import '../App.scss';
import tick from '../assets/tick.svg';
import cross from '../assets/cross.svg';
import { render } from 'react-dom';

const Quiz = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [questionNumber, setQuestionNumber] = useState(1);
    const [rightScore, setRightScore] = useState(0);
    const [wrongScore, setWrongScore] = useState(0);

    const callQuestionAPI = () => {
        fetch("http://localhost:8000/newquestion")
            .then(res => res.json())
            .then(res => {
                setQuestion(res.newQuestion.name);
                setAnswer(res.newQuestion.chord);
            })
            .catch(error => console.log('error', error));
    };
    
    useEffect(() => {
        callQuestionAPI();
    }, [questionNumber]);


    const changeScore = (e) => {
        if (e.target.dataset.value === "rightTick") {
            setRightScore(rightScore + 1);
            setQuestionNumber(questionNumber + 1);
            //setRightScore( rightScore =+ 1);
        } else if (e.target.dataset.value === "wrongCross") {
            setWrongScore(wrongScore + 1);
            setQuestionNumber(questionNumber + 1);
        }
    }

    return (
        <div className="App">
            <div className="top">
                <HeaderLogo />
                <h2>{ question }</h2>
            </div>
            <div className="pre answer hide">
                <div className="waitText hide">Answer in...</div>
                <div id="timer hide">&nbsp;</div>
            </div>
            <div className="post answer">
                { answer }
      </div>
            <div className="rightWrong">
                <ScoreButton url={tick} alt="tick" styling="rightTick" changeScore={changeScore}/>
                <ScoreButton url={cross} alt="cross" styling="wrongCross" changeScore={changeScore}/>
            </div>
            <Score rightScore={rightScore} wrongScore={wrongScore}/>
        </div>
    );
}

export default Quiz;
