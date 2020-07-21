import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is another page</h1>
    <p>Wonder what will be here?</p>
    <Link to="/">Teleport through a gap in the space/time continuum</Link>
  </Layout>
)

export default SecondPage
