import React, { useState } from "react";
import { Wrapper } from "./styles";
import { Link } from "gatsby";
export function NewUserTest() {
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [startQuiz, setStartQuiz] = useState(false);
	const handleAnswerSubmit = (answer) => {
		setSelectedAnswer(answer);
	};
	const handleStartQuiz = () => {
		setStartQuiz(true);
	};
	return (
		<Wrapper className="Container">
			<button
				disabled={selectedAnswer !== null ? true : false}
				className={selectedAnswer === "aspiring" ? "selected" : ""}
				onClick={() => handleAnswerSubmit("aspiring")}
			>
				An aspiring Product Manager
			</button>
			<button
				disabled={selectedAnswer !== null ? true : false}
				className={selectedAnswer === "experienced" ? "selected" : ""}
				onClick={() => handleAnswerSubmit("experienced")}
			>
				Already work in a product team
			</button>
			{selectedAnswer && (
				<div>
					<Link to="/tests/test-for-aspiring-product-managers">
						<button onClick={() => handleStartQuiz()}>
							Let's start{" "}
						</button>
					</Link>
				</div>
			)}
		</Wrapper>
	);
}
