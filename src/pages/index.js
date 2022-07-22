import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout className = "layout">
    <Seo title="Home" />
    
    <section className="presentation">
      <div className="presentation__intro">
      <p>Hi I'm Nathan
        Description, link github, link resume </p>
      </div>

      <div className="presentation__picture">
        <img alt="picture_of_myself"></img>
      </div>

    </section>

      <section className= "domains">

        <div className ="domains__subdomains">
            <div classname="domains__latestProject__description">
              <p>Latest projectDescription project QT</p>
            </div>
            <div classname="domains__latestProject__video">
            {/* <video width="320" height="240" controls>
              <source src="src\videos\Qt_PathFinding.mp4" type="video/mp4"></source>
              
            </video> */}

          <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/y33knp7ViVo"
          frameborder="0"></iframe>
            </div>
        </div>

        <div className ="domains__subdomains">
          <div classname="domains__robotics__description">
            Robotics
            <p> Description Robotics (active controls, path planning, SLAM) </p>
          </div>
        </div>

        <div className ="domains__subdomains">
          <div classname="domains__machineLearning__description">
          Software and Machine Learning
          <p> Description  machine learning(from scratch, CNN vs bayesian)  </p>
          </div>
        </div>

        <div className="domains_more_projects">
          More projects<Link className="header__links" to="\"></Link>
        </div>
      </section>

  </Layout>
)

export default IndexPage
