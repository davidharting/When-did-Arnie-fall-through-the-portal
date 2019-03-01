import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

/**
 * Naive pluralize is fine, because it's only years, months, or days
 */
function pluralize(quantity, noun) {
  if (quantity === 1) {
    return noun
  }
  return `${noun}s`
}

function HowLong() {
  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)

  useEffect(() => {
    let day = dayjs("2015-03-07")
    const today = dayjs()

    const numberOfYears = today.diff(day, "years")
    setYears(numberOfYears)
    day = day.add(numberOfYears, "years")

    const numberOfMonths = today.diff(day, "months")
    setMonths(numberOfMonths)
    day = day.add(numberOfMonths, "months")

    const numberOfDays = today.diff(day, "days")
    setDays(numberOfDays)
  }, [])

  return (
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
  )
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
