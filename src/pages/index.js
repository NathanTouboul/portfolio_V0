import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = () => (
  <Layout className = "layout">
    <Seo title="Home"/>
    
    <section className="presentation">
      <div className="presentation__intro">
        <p>Hi I'm Nathan <br/> I am a french Software Engineer in San Diego! Let's connect!</p>
        <div className="button_connect">
          <a class="btn" href="https://www.linkedin.com/in/nathantouboul/" target="_blank" rel="noreferrer">Linkedin</a>
          <a class="btn" href="https://github.com/NathanTouboul" target="_blank" rel="noreferrer">GitHub</a>
          <Link class="btn" to="/resume-page/"> Resume </Link>
        </div>


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

            <iframe className="Qt_video"
              id="ytplayer" type="text/html" src="https://www.youtube.com/embed/-sg4VVNGOZY?autoplay=1" frameborder="0" allow="autoplay; encrypted-media">
            </iframe>

          </div>
        
          <div classname="domains__subdomains__description">
            <p>
              I have been playing with path-finding algorithms and the Qt framework. The idea was for me to find a good way to visualize those algorithms searching for the goal while building with a "pretty" GUI. Apart from using Qt data types, I used multithreading for real-time simulation and visualization.
              The entire application is coded with C++ and built with qmake. <br></br>
              <a href="https://github.com/NathanTouboul/PathPlanning" target="_blank">Link to repo</a>
            </p>
            
          </div>
            
        </div>

        <div className ="domains__subdomains">
          <div className = "domains__subdomains__title">
            Software and Machine Learning
          </div> 
          <div classname="domains__subdomains__description">
          <p> Currently a software engineer at Qualcomm in San Diego, I am extremely fortunate to work in the domain that I am most interested in. Computer science has been my primary focus for years now. My interest in the domain started during my bachelor's in electronics, and solidified, during my master's thesis back in France, for which I worked on NURBS manipulation purely using python. Today, I am mostly interested in Machine Learning, Data Science and Robotics. Indeed, I have studied ML in-depth during my year at Illinois Tech, working on image recognition and autonomous driving. 
          </p>
          </div>
          <div classname="domains__subdomains__video">
              <img className= "bayesian1" alt="gif_lidar"></img>
              <img className= "bayesian2" alt="gif_lidar"></img>

            </div>
        </div>

        <div className ="domains__subdomains">

          <div className = "domains__subdomains__title">
            Advanced Robotics and Controls
          </div> 

          <div classname="domains__subdomains__description">
            <p> Coming from a mechatronics background, I am proud of having a deep understanding of robotics engineering. Having studied first electronics, then mechanical and finally software engineering, I have been involved in a lot of advanced robotics projects, ranging from active controls to SLAM implementation. I have also been fortunate enough to present a research project at Illinois Tech on Lidar-based localization of autonomous vehicles.
            </p>
          </div>
          
          <div classname="domains__subdomains__video">
            <img className= "gif_lidar" alt="gif_lidar"></img>
          </div>

        </div>

        <div className="domains_more_projects">
          <Link class="btn" to="/projects-page/">More projects</Link>
        </div>

        
      </section>

  </Layout>
)


export default HomePage
