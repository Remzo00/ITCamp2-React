import React, { useState } from 'react';
import './index.css';

const Quiz = () => {
  const questions = [
    {
      questionText: 'Koji je glavni grad Francuske?',
      answerOptions: [
        { answerText: 'London', isCorrect: false },
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Pariz', isCorrect: true },
        { answerText: 'Madrid', isCorrect: false },
      ],
    },
    {
      questionText: 'Koji je najveći kontinent na svijetu?',
      answerOptions: [
        { answerText: 'Afrika', isCorrect: false },
        { answerText: 'Europa', isCorrect: false },
        { answerText: 'Azija', isCorrect: true },
        { answerText: 'Australija', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Rezultat: {score} od {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Pitanje {currentQuestion + 1}/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
