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
      siteTitle     = {'SITE IN CONSTRUCTION'} 
      siteProfile   = {'PROFILE'} 
      siteProjects  = {"PROJECTS"}
      siteContact   = {"CONTACT"}
      />

    <div class="container-navigation">
      
          
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Resume</a></li>
            </ul>
           </div>
          </nav>

    </div>
      <hr />
      <main className = "main">{children}</main>
      <hr />
      <footer className="footer">
        <div className="footer__attribution">    
        © {new Date().getFullYear()}, Built by Nathan Touboul
        </div>     
      </footer>

      </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
