import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

function howLong() {
  return [2, 4, 25]
}

function IndexPage() {
  const [years, months, days] = howLong()
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul>
        <li>
          <p>{`${years} years`}</p>
        </li>
        <li>
          <p>{`${months} months`}</p>
        </li>
        <li>
          <p>{`${days} days`}</p>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
