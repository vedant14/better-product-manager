import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Tests, Outcome } from "../components"

const TestPage = ({ data }) => {
  const questions = data.graphCmsTest.testquestions
  const questionCount = data.graphCmsTest.testquestions.length
  const [showScore, setShowScore] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <Layout>
      <SEO
        title={data.graphCmsTest.title}
        description="Product manager tests"
        pathname="home"
      />
      {showScore === true ? (
        <Outcome
          score={score}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          setShowScore={setShowScore}
        />
      ) : (
        <Tests
          questionCount={questionCount}
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          score={score}
          setScore={setScore}
          setShowScore={setShowScore}
        />
      )}
    </Layout>
  )
}

export default TestPage

export const query = graphql`
  query TestQuest($id: String!) {
    graphCmsTest(id: { eq: $id }) {
      slug
      id
      title
      description
      testquestions {
        questionString
        answers
        trivia {
          html
          text
        }
        gif {
          url
        }
      }
    }
  }
`
