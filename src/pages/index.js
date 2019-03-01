import React from "react"
import dayjs from "dayjs"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

// A "couple of days ago" from the first episode, which was Dec 9 2017
const IT_HAPPENED = dayjs("2015-03-07")

function Year({ number }) {
  return (
    <li>
      <h1>{`${number} ${pluralize(number, "year")}`}</h1>
    </li>
  )
}

function HowLong() {
  const today = dayjs()
  const years = today.diff(IT_HAPPENED, "years")
  const months = today.diff(IT_HAPPENED, "months") - years * 12
  const monthsDecimal = today.diff(IT_HAPPENED, "months", true) - years * 12
  const leftover = monthsDecimal - months

  if (leftover <= 0.9) {
    return (
      <React.Fragment>
        <Year number={years} />
        <li>
          <h1>{`${months} ${pluralize(months, "month")}`}</h1>
        </li>
        <li>
          <h1>and some change ago</h1>
        </li>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Year number={years} />
      <li>
        <h1>{`and ${months + 1} ${pluralize(months + 1, "month")} ago`}</h1>
      </li>
    </React.Fragment>
  )
}

/**
 * Naive pluralize is fine, because it's only years, months, or days
 */
function pluralize(quantity, noun) {
  if (quantity === 1) {
    return noun
  }
  return `${noun}s`
}

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul>
        <HowLong />
      </ul>
    </Layout>
  )
}

export default IndexPage
