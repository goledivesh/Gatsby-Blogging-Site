import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faUserAlt,
  faStream,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons"

import * as headerStyle from "./header.module.scss"

const Nav = styled.nav`
  padding: 8px 15px;
  background: #000;
  border-radius: 3px;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        id
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header>
      <div className="page-heading">
        <h1 className={headerStyle.pageHeading}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        {/* <h4>
          <span style={{ color: "darkgray" }}>Posted By - </span>
          {data.site.siteMetadata.author}
        </h4> */}
      </div>
      <Nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link
              to="/"
              className={headerStyle.navListItem}
              activeClassName={headerStyle.activeListItem}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyle.navListItem}
              activeClassName={headerStyle.activeListItem}
            >
              <FontAwesomeIcon icon={faUserAlt} /> About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyle.navListItem}
              activeClassName={headerStyle.activeListItem}
            >
              <FontAwesomeIcon icon={faStream} /> Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyle.navListItem}
              activeClassName={headerStyle.activeListItem}
            >
              <FontAwesomeIcon icon={faIdBadge} /> Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </header>
  )
}

export default Header
