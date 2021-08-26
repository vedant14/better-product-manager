import React from "react"
import { ImageWrapper } from "./styles"

export function Outcome({ score, setCurrentQuestion, setShowScore, setScore }) {
	const handleReset = () => {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0)
	}
	return (
		<div className="Container">
			<h1>Hi Thanks your score is {score}</h1>
			<button onClick={() => handleReset()}>Try again?</button>
		</div>
	)
}
