import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Destinations from "../components/Destinations"
import Testimonial from "../components/Testimonial"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Destinations heading='Top Destinations' />
    <Testimonial />
    <Stats />
  </Layout>
)

export default IndexPage
