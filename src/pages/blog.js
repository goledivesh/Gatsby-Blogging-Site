import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Layout from "../components/layout"

const Article = styled.article`
  padding: 10px 15px;
  background: #e5f3ff;
  margin-bottom: 15px;
  border-radius: 3px;
`

const PostTitle = styled.h1`
  margin-bottom: 3px;
`

const PostDate = styled.h4`
  margin-top: 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
  font-weight: 600;
`

const ReadMoreLink = styled(Link)`
  margin-bottom: 0;
  font-size: 14px;
  text-decoration: none;
`

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            publishedDate(formatString: "MMMM Do YYYY")
            slug
            title
            author
            id
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle="Blog" pageSubTitle="Blog Page">
      <div>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <Article key={edge.node.id}>
              <PostTitle>{edge.node.title}</PostTitle>
              <PostDate>
                Posted By - {edge.node.author} on {edge.node.publishedDate}
              </PostDate>
              {/* <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div> */}
              <div>
                <ReadMoreLink to={`/blog/${edge.node.slug}`}>
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </ReadMoreLink>
              </div>
            </Article>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage
