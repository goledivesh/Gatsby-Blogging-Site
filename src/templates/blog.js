import React from "react"
import { graphql, Link } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
// import { renderRichText } from "gatsby-source-contentful/rich-text"

// https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from "../components/layout"



const BlogPublishedDate = styled.h4`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  font-style: italic;
`

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`
const Blog = props => {
  const bodyData = JSON.parse(props.data.contentfulBlogPost.body.raw);
  console.log(bodyData);
  return (
    <Layout pageTitle={props.data.contentfulBlogPost.title}>
      <Link to="/blog">
        <FontAwesomeIcon icon={faArrowLeft} /> Back To Blog
      </Link>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <BlogPublishedDate>
        {props.data.contentfulBlogPost.publishedDate}
      </BlogPublishedDate>

      { documentToReactComponents(bodyData) }

      {/* <div
        dangerouslySetInnerHTML={{
          __html: documentToReactComponents(bodyData)
        }}
      ></div> */}
    </Layout>
  )
}

export default Blog
