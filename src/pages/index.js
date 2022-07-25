import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = () => (
  <Layout className = "layout">
    <Seo title="Home"/>
    
    <section className="presentation">
      <div className="presentation__intro">
      <p>Hi I'm Nathan <br/> I am a french Software Engineer in San Diego! Let's connect!  </p>
      <button class="btn"><i class="button_linkedin"></i>Linkedin</button>
      <button class="btn"><i class="button_github"></i>GitHub</button>


      <button class="btn"><i class="button_resume"></i>Resume
      {/* <Link className="" to="/profile-page/">
      </Link> */}
      <a href = "../docs/resume.pdf"></a>
      </button>

      </div>

      <div className="presentation__picture">
        <img alt="picture_of_myself"></img>
      </div>

    </section>

      <section className= "domains">

        <div className ="domains__subdomains">

          <div className = "domains__subdomains__title">
            My latest project!
          </div>

          <div classname="domains__subdomains__video">

            <iframe title="Qt_video" 
              id="ytplayer" type="text/html" src="https://www.youtube.com/embed/y33knp7ViVo" frameborder="0">
            </iframe>

          </div>
        
          <div classname="domains__subdomains__description">
            <p>
              I have been playing with path-finding algorithms and the Qt framework. The idea was for me to find a good way to visualize those algorithms searching for the goal
              while building with a "pretty" GUI. Apart from using Qt data types, I used multithreading for real-time simulation and visualization. I am looking to apply Qt for web assembly,
              to use this GUI directly on a page (this asks for some optimization as WebAssembly threads are quite complex).
            </p>
          </div>
            
        </div>

        <div className ="domains__subdomains">
          <div className = "domains__subdomains__title">
            Software and Machine Learning
          </div> 
          <div classname="domains__subdomains__description">
          <p> Heavily focused on Software and Data Science,  I am particularly interested in Machine Learning. 
          Indeed, I have studied ML in depth during my year at Illinois Tech, working on image recognition and autonomous driving. 
          </p>
          </div>
        </div>

        <div className ="domains__subdomains">

        <div className = "domains__subdomains__title">
          Advanced Robotics and Controls
        </div> 

        <div classname="domains__subdomains__description">
          <p> Description Robotics and controls(active controls, path planning, SLAM) </p>
        </div>
        </div>



        <div className="domains_more_projects">
          More projects<Link className="header__links" to="\"></Link>
        </div>
      </section>

  </Layout>
)

export default HomePage
