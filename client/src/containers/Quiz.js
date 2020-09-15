import React, { useState, useEffect } from 'react';

import HeaderLogo from '../components/Header/HeaderLogo';
import Score from '../components/Score/Score';
import ScoreButton from '../components/Button/ScoreButton';

import '../App.scss';
import tick from '../assets/tick.svg';
import cross from '../assets/cross.svg';

const Quiz = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [questionNumber, setQuestionNumber] = useState(1);
    const [rightScore, setRightScore] = useState(0);
    const [wrongScore, setWrongScore] = useState(0);
    const [countdown, setCountdown] = useState(6);
    const [showAnswer, setShowAnswer] = useState(false);

    const callQuestionAPI = () => {
        setShowAnswer(false);
        setCountdown(6);
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

    useEffect(() => {
        let interval = null;
        if (countdown === 1) {
            clearInterval(interval);
            setShowAnswer(true);
        } else if (!showAnswer) {
            interval = setInterval(() => {
              setCountdown(countdown => countdown - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
      }, [showAnswer, countdown]);

    const Answer = () => {
        if (showAnswer) {
            return (
                <div className="post answer">
                { answer }
                    <div className="rightWrong">
                        <ScoreButton url={tick} alt="tick" styling="rightTick" changeScore={changeScore}/>
                        <ScoreButton url={cross} alt="cross" styling="wrongCross" changeScore={changeScore}/>
                    </div>
                </div>

            )
        } else if (!showAnswer) {
            return (
                <div className="pre answer">
                    <div className="waitText">Answer in...</div>
                    <div id="timer">{countdown - 1}</div>
                </div>
            )
        } else return null;
    }


    const changeScore = (e) => {
        if (e.target.dataset.value === "rightTick") {
            setRightScore(rightScore + 1);
        } else if (e.target.dataset.value === "wrongCross") {
            setWrongScore(wrongScore + 1);
        }
        setQuestionNumber(questionNumber + 1);
    }

    return (
        <div className="App">
            <div className="top">
                <HeaderLogo />
                <h2>{ question }</h2>
            </div>
                <Answer />
            <Score rightScore={rightScore} wrongScore={wrongScore}/>
        </div>
    );
}

export default Quiz;
