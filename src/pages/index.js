import React from "react"
import dayjs from "dayjs"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

// A "couple of days ago" from the first episode, which was Dec 9 2017
const IT_HAPPENED = dayjs("2017-12-7")

function howLong() {
  const today = dayjs()
  const years = today.diff(IT_HAPPENED, "years")
  const months = today.diff(IT_HAPPENED, "months") - years * 12
  const days = today.diff(IT_HAPPENED, "days") - (years * 365 + months * 30)

  return [years, months, days]
}

function IndexPage() {
  const [years, months, days] = howLong()
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul>
        <li>
          <h1>{`${years} years`}</h1>
        </li>
        <li>
          <h1>{`${months} months`}</h1>
        </li>
        <li>
          <h1>{`${days} days`}</h1>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
