// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import { graphql } from "graphql-compose"

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    {data.allContentfulPost.edges.map(edge => {
      const author = edge.node.author
      return (
        <div>
          <h2>{edge.node.title}</h2>
          {/* avatarの中身を確認してからimgタグを利用する */}
          {edge.node.author.avatar && (
            <img width={40} src={author.avatar.fixed.src} alt={author.name} />
          )}
          <small>{author.name}</small>
          <p>{edge.node.content.content}</p>
        </div>
      )
    })}
  </Layout>
)

export const query = graphql`
  {
    allContentfulPost {
      edges {
        node {
          title
          content {
            content
          }
          author {
            name
            description {
              description
            }
            avatar {
              fixed {
                width
                height
                src
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
