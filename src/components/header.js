import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, sectionProfile, sectionProjects, siteContact }) => (
  
  <header className="header">
    <div className="header__welcome"> 
      <Link className="header__links" to="/"> {siteTitle}</Link>
    </div>
    <div className="header__tabs"> 
      <Link className="header__links" to="/#profile_section">{sectionProfile}</Link>
      <Link className="header__links" to="/#project_section">{sectionProjects}</Link>
      <Link class="header__links" to="/resume-page/" >RESUME</Link>
    </div>  
  </header>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
  sectionProfile: PropTypes.string,
  sectionProjects: PropTypes.string,
  siteContact: PropTypes.string,

}

Header.defaultProps = {
  siteTitle: 'Home',
  sectionProfile: 'Profile',
  sectionProjects: 'Projects', 
  siteContact: 'Contact', 
}

export default Header
