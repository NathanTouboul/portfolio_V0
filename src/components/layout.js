import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <body>
      <Header 
      siteTitle     = {'Site in construction'} 
      siteProfile   = {'Profile'} 
      siteProjects  = {"Projects"}
      siteContact   = {"Contacts"}
      />

      <main className = "main">{children}</main>

      <footer className="footer">
        <div className="footer__attribution">    
        © {new Date().getFullYear()}, Built by Nathan with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>     
      </footer>

      </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
