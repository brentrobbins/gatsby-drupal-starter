import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home</h1>
    <p>Replace me with dynamic content from Drupal.</p>
  </Layout>
)

export default IndexPage
