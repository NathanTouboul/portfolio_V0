import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {FaLinkedin} from "react-icons/fa"

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
    <>

    <body>
      <Header siteTitle={data.site.siteMetadata.title} />


        <main className = "main">
        {children}
        </main>

        <footer className="footer">
          <div className="footer__social">
            <a href= "https://www.linkedin.com/in/nathantouboul/"><FaLinkedin/></a>
          </div>

          <div className="footer__attribution">    
          © {new Date().getFullYear()}, Built by Nathan with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>     
        </footer>

      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
