import React from "react"
import dayjs from "dayjs"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

// A "couple of days ago" from the first episode, which was Dec 9 2017
const IT_HAPPENED = dayjs("2015-03-07")

function howLong() {
  const today = dayjs()
  const years = today.diff(IT_HAPPENED, "years")
  const months = today.diff(IT_HAPPENED, "months") - years * 12
  const days = today.diff(IT_HAPPENED, "days") - (years * 365 + months * 30)

  return [years, months, days]
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
  const [years, months, days] = howLong()
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul>
        <li>
          <h1>{`${years} ${pluralize(years, "year")}`}</h1>
        </li>
        <li>
          <h1>{`${months} ${pluralize(months, "month")}`}</h1>
        </li>
        <li>
          <h1>{`${days} ${pluralize(days, "day")}`}</h1>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
