import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
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
      siteTitle         = {'HOME'} 
      sectionProfile    = {'PROFILE'} 
      sectionProjects   = {"PROJECTS"}
      siteContact       = {"CONTACT"}
      />

    <div class="container-navigation">
      
          
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <li><a href="/">Home</a></li>
              <li><Link className="header__links" to="#profile_section">Profile</Link></li>
              <li><Link className="header__links" to="#project_section">Projects</Link></li>
              <li><Link className="header__links" to="/resume-page/">Resume</Link></li>
            </ul>
           </div>
          </nav>

    </div>
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
