import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blogs" />
    <h1>Hi from the Blog page</h1>
    <p>Welcome to Blog page</p>
    <Link to="/books">Go Books</Link>
  </Layout>
)

export default BlogPage
