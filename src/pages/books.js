import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BookPage = () => (
  <Layout>
    <SEO title="Books" />
    <h1>Hi from the Book page</h1>
    <p>Welcome to Book page</p>
    <Link to="/flashfic">Flash Fics!</Link>
  </Layout>
)

export default BookPage