import React from "react"
import { Wrapper } from "./styles"
import { Link } from "gatsby"
import { ImposterCard } from "../ImposterCard"
import { AllTests } from "../AllTests"
import { Jobs } from "../Jobs"
export function NewUserTest({
	selectedRole,
	selectedAnswer,
	setSelectedAnswer,
}) {
	const handleAnswerOptionClick = answer => {
		setSelectedAnswer(answer)
	}

	var text = ""
	var question = ""
	var final = ""
	var yes = ""
	var no = ""
	if (selectedRole === "aspiring") {
		text = (
			<p>
				Got it. You want to be a <strong>Product Manager</strong> someday. Or
				even a CPO :O <br />
				<i>Let's put you to a test, shall we?👇🏽</i>
			</p>
		)
		question = (
			<div className="question">
				<h3>
					Do you think a product manager’s role is to be Steve Jobs of the team?
				</h3>
				<Jobs />
			</div>
		)
		yes = "Yes, that's why I want to be a PM"
		no = "No, that is obviously true"
	} else {
		text = (
			<p className="question">
				Ohkay. I see you are already on the dark side :) <br />
				<i>Let’s see how much you know...👇🏽</i>
			</p>
		)
		question = (
			<>
				<div className="question">
					<h3>Do you think the definition given below is accurate?</h3>
				</div>
				<ImposterCard />
			</>
		)
		yes = "Yes :`("
		no = "No, that looks false"
	}

	if (selectedAnswer === "yes" && selectedRole === "aspiring") {
		final = (
			<>
				<p>
					That seems a bit off.
					<br />
					Sorry to break it you but being a product manager is not like being
					Steve Jobs.
				</p>
				<img
					className="gif-image"
					src="https://betterproductmanager.s3.ap-south-1.amazonaws.com/test.gif"
					alt="Test"
				/>
				<h4>
					But there are things you can do to do understand what it means to be a
					product manager
				</h4>
			</>
		)
	} else if (selectedAnswer === "no" && selectedRole === "aspiring") {
		final = (
			<>
				<p>
					Well... that’s correct. <br />
					But don’t believe that you can become a product manager yet.
				</p>
				<img
					className="gif-image"
					src="https://betterproductmanager.s3.ap-south-1.amazonaws.com/test.gif"
					alt="Test"
				/>
				<h4>Take these tests, to understand what it means to be a PM</h4>
			</>
		)
	} else if (selectedAnswer === "yes" && selectedRole === "experienced") {
		final = (
			<>
				<p>
					Correct choice! <br />
					Hope you get better at coping with your imposter syndrome :)
				</p>
				<img
					className="gif-image"
					src="https://betterproductmanager.s3.ap-south-1.amazonaws.com/darkness.gif"
					alt="Darkness"
				/>
				<h4>
					Take these tests to learn the skills you’ll need to navigate the world
					of digital product management
				</h4>
			</>
		)
	} else if (selectedAnswer === "no" && selectedRole === "experienced") {
		final = (
			<>
				<p>
					Agree to disagree? <br />
					However, as a fellow product manager, I welcome you to take more
					tests.
				</p>
				<img
					className="gif-image"
					src="https://betterproductmanager.s3.ap-south-1.amazonaws.com/test.gif"
					alt="Tests"
				/>
				<h4>
					These tests will help you learn the skills you’ll need to navigate the
					world of digital product management
				</h4>
			</>
		)
	}

	return (
		<Wrapper className="Container">
			<div className="question">{text}</div>
			<img
				className="gif-image"
				src="https://betterproductmanager.s3.ap-south-1.amazonaws.com/letsstart.gif"
				alt="letsstart"
			/>
			<p className="warning">Things below are trickier than they look.</p>
			{question}
			<div id="flex">
				<button
					className={selectedAnswer === "yes" ? "active" : ""}
					onClick={() => handleAnswerOptionClick("yes")}
				>
					{yes}
				</button>
				<button
					className={selectedAnswer === "no" ? "active" : ""}
					onClick={() => handleAnswerOptionClick("no")}
				>
					{no}
				</button>
			</div>
			{selectedAnswer && (
				<>
					<div className="question">
						{final}
						<small>
							<Link to="/">What are these tests?</Link>
						</small>
					</div>
					<AllTests hide={true} />
				</>
			)}
		</Wrapper>
	)
}
