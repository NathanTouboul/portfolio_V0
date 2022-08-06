import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, siteProfile, siteProjects, siteContact }) => (
  
  <header className="header">
    <div className="header__welcome">
      
      <Link className="header__links" to="/"> {siteTitle}</Link>
    
    </div>
    <div className="header__tabs"> 
      <Link className="header__links" to="#profile_section">
        {siteProfile}
      </Link>
      <Link className="header__links" to="#project_section">
        {siteProjects}
      </Link>
      <Link className="header__links" to="">
        {siteContact}
      </Link>
      
    </div>  
  </header>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteProfile: PropTypes.string,
  siteProjects: PropTypes.string,
  siteContact: PropTypes.string,

}

Header.defaultProps = {
  siteTitle: 'Home',
  siteProfile: 'Profile',
  siteProjects: 'Projects', 
  siteContact: 'Contact', 
}

export default Header
