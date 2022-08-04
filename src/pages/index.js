import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = () => (
  <Layout className = "layout">
    <Seo title="Home"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    
    <section className="presentation">
      <div className="presentation__intro">
        <p>
        Hi I'm Nathan <br/> I am a french Software Engineer in San Diego! 
        I am currently looking for a position in Machine Learning and/or software robotics engineering! 
        Let's connect!
        </p>
        <div className="button_connect">
          <a class="btn" href="https://www.linkedin.com/in/nathantouboul/" target="_blank" rel="noreferrer"> 
            {/* <i class="fa fa-linkedin-square"></i> */}
            My Linkedin
          </a>
          <a class="btn" href="https://github.com/NathanTouboul" target="_blank" rel="noreferrer">My GitHub</a>
          <Link class="btn" to="/resume-page/"> My resume</Link>
        </div>


      </div>

      <div className="presentation__picture">
        <img alt="picture_of_myself"></img>
      </div>

    </section>

    <section className= "domains">
      
      <div className = "domains__title">
            MY LATEST PROJECTS
      </div>

        <div id="domain-project" className ="domains__subdomains">

        <div class="domains__subdomains__description" >
              I have been playing with path-finding algorithms and the Qt framework. 
              The idea was for me to find a good way to visualize those algorithms searching for the goal while building with a "pretty" GUI. 
              Apart from using Qt data types, I used multithreading for real-time simulation and visualization.
              The entire application is coded with C++ and built with qmake.
              <a href="https://github.com/NathanTouboul/PathPlanning" target="_blank" rel="noreferrer">Link to repo</a>
        </div>
          <div class="domains__subdomains__video">

            <iframe className="Qt_video"
              id="ytplayer" type="text/html" src="https://www.youtube.com/embed/-sg4VVNGOZY?autoplay=1" frameborder="0" allow="autoplay; encrypted-media">
            </iframe>

          </div>
        
          
            
        </div>
        <div className = "domains__title">
            SOFTWARE AND MACHINE LEARNING
        </div> 

        <div  id="domain-software" className ="domains__subdomains">
          
          <div class="domains__subdomains__description">
          <p> Currently software engineer in the automotive industry, I am extremely fortunate to work in the domain that I am most interested in. Computer science has been my primary focus for years now. My interest in the domain started during my bachelor's in electronics, and solidified, during my master's thesis back in France, for which I worked on NURBS manipulation purely using python. Today, I am mostly interested in Machine Learning, Data Science and Robotics. Indeed, I have studied ML in-depth during my year at Illinois Tech, working on image recognition and autonomous driving. 
          </p>
          </div>
          <div class="domains__subdomains__video">
              <img className= "bayesian1" alt="gif_lidar"></img>
              <img className= "bayesian2" alt="gif_lidar"></img>

          </div>
        </div>

        <div className = "domains__title">
            Advanced Robotics and Controls
        </div> 
        <div id="domain-robotics" className ="domains__subdomains">

          <div class="domains__subdomains__video">
            <img className= "gif_lidar" alt="gif_lidar"></img>
          </div>
          <div class="domains__subdomains__description">
            Coming from a mechatronics background, I am proud of having a deep understanding of robotics engineering. Having studied first electronics, then mechanical and finally software engineering, I have been involved in a lot of advanced robotics projects, ranging from active controls to SLAM implementation. I have also been fortunate enough to present a research project at Illinois Tech on Lidar-based localization of autonomous vehicles.
          </div>
        </div>

        <div class="domains_more_projects">
          <Link class="btn" to="/projects-page/">ALL MY PROJECTS</Link>
        </div>

        
      </section>

  </Layout>
)


export default HomePage
