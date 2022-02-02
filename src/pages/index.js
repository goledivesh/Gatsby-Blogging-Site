import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import "../styles/style.scss"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home" pageSubTitle="Home Page">
      <p>
        Ad amet incididunt est laborum fugiat. Exercitation incididunt Lorem
        aute anim adipisicing exercitation qui elit do occaecat. Ut et non duis
        minim ea duis incididunt. Lorem irure do consequat qui proident officia
        dolore eu.
      </p>

      <p>
        Know more <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
