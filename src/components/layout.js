import * as React from "react"
import Header from "./Header"
import Footer from"./Footer"

import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  

  return (
    <>
    <GlobalStyle />
      <Header  />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer >
       <Footer />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  
}

export default Layout
