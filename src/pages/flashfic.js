import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FlashficPage = () => (
  <Layout>
    <SEO title="Blogs" />
    <h1>Hi from the Flashfic page</h1>
    <p>Welcome to Flashfic page</p>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default FlashficPage