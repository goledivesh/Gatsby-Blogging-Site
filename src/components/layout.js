import React from "react"
import styled from "styled-components"

import Footer from "./footer"
import Header from "./header"

import * as layoutStyle from "./layout.module.scss"

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ pageTitle, pageSubTitle, children }) => {
  return (
    <Container>
      <title>{pageTitle} | Gatsby</title>
      <div className={layoutStyle.content}>
        <Header />
        <h2 className={layoutStyle.pageSubTitle}>{pageSubTitle}</h2>
        {children}
      </div>
      <Footer />
    </Container>
  )
}

export default Layout
