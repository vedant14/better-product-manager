import React from "react"
import { Wrapper, Card } from "./styles"
import { useTestsQuery } from "../../hooks/useTestsQuery"

export function AllTests({ hide }) {
  const tests = useTestsQuery()
  return (
    <Wrapper className={hide === false ? "Container" : ""} id="tests">
      {hide === false && <h3>New tests are here 👇🏼</h3>}
      <div>
        {tests.map(test => (
          <>
            <Card to={`/tests/${test.slug}`}>
              <img src={test.coverImage.url} alt={test.coverImage.fileName} />
              <div>
                <h3>{test.title}</h3>
                <p>{test.description}</p>
              </div>
            </Card>
          </>
        ))}
      </div>
    </Wrapper>
  )
}
