import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
export default function Home({ data }) {
  return (
    <Layout>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </Layout>
  );
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`