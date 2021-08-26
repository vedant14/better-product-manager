import React, { useState } from "react"
import { Wrapper } from "./styles"

export function Tests({
  questionCount,
  questions,
  currentQuestion,
  setCurrentQuestion,
  score,
  setScore,
  setShowScore,
}) {
  const [showAnswer, setShowAnswer] = useState("")
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const handleNextQuestion = () => {
    setSelectedAnswer(null)
    if (currentQuestion + 1 >= questionCount) {
      setCurrentQuestion(0)
      setShowScore(true)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleAnswerSubmit = answer => {
    setSelectedAnswer(answer.id)
    if (answer.isCorrect === true) {
      setScore(score + 10)
      setShowAnswer("correct-answer")
    } else {
      setShowAnswer("incorrect-answer")
    }
  }
  return (
    <Wrapper className="Container">
      <div id="number">
        <h4>
          Question:
          {currentQuestion + 1}/{questionCount}
        </h4>
      </div>
      <div id="question" className="question">
        <h2>{questions[currentQuestion].questionString}</h2>
        {questions[currentQuestion].answers.map(answer => (
          <button
            disabled={selectedAnswer !== null ? true : false}
            key={answer.id}
            className={selectedAnswer === answer.id ? showAnswer : ""}
            onClick={() => handleAnswerSubmit(answer)}
          >
            {answer.answerText}
          </button>
        ))}
        {selectedAnswer && (
          <>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: questions[currentQuestion].trivia.html,
              }}
            ></div>
            <div>
              <img
                src={questions[currentQuestion].gif.url}
                alt="Trivia"
                className="gif-image"
              />
            </div>
            <div>
              <button
                className="next-button"
                onClick={() => handleNextQuestion()}
              >
                Next Question
              </button>
            </div>
          </>
        )}
      </div>
      <div id="score">
        <h4>{score}</h4>
      </div>
    </Wrapper>
  )
}
