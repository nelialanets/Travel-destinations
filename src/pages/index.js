import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Destinations from "../components/destinations"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Destinations />
  </Layout>
)

export default IndexPage
