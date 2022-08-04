import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./profile-page.css"

const ProfilePage = () => (

  <Layout>
    <Seo title="Profile Page"/>
    <div class="title_profile_page">
      <h1>My Profile</h1>
    </div>
    <ul id='timeline'>
      <li class='work'>
        <input class='radio' id='work1' name='works' type='radio'></input>
        <div class="relative">
          <label for='work1'>Software engineer <br/>
           <a href="https://www.qualcomm.com/products/application/automotive" target="_blank" rel="noreferrer">Qualcomm</a>
           </label>
          <div class='date'>March 2021 - Today</div>
          <span class='circle'></span>
        </div> 
        <div class='content'>
          <p>
            Currently working as a software engineer in the automotive team of Qualcomm in San Diego. I am focusing on enabling graphics and audio features for in-vehicle devices. For the moment, I have been working with OpenCL and EGL for graphics and ALSA for audio. Day to day, I mostly use C++, Python and git as well as interacting with Linux shells and virtual machines. 
          </p>
        </div>
      </li>
      <li class='work'>
        <input class='radio' id='work2' name='works' type='radio'></input>
        <div class="relative">
          <label for='work2'>Master of Engineering <br/>
          <a href="https://www.iit.edu/" target="_blank" rel="noreferrer">Illinois Institute of Technology</a>
          </label>
          <div class='date'>Jan 2021 - Dec 2021</div>
          <span class='circle'></span>
        </div>
        <div class='content'>
          <p>
            I had the great opportunity to pursue a second master's degree at Illinois Tech in Chicago. During this year, I mainly studied Advanced robotics and Machine Learning. On the robotics side, I worked on Simultaneous Localization And Mapping algorithms, Kalman filters, and Path Planning in general. On the Machine Learning side, I studied neural networks in depth (mathematically), as well as image recognition and Data-Driven modelization and control of systems.
            <br/>
            Click <Link class="links_profile" to="/master_iit_page/" target="_blank" rel="noreferrer">here</Link> to view my diploma.
            <br/>

          </p>

      </div>
      </li>
      <li class='work'>
        <input class='radio' id='work3' name='works' type='radio'></input>
        <div class="relative">
          <label for='work3'>Research Project: Navigation Integrity of Lidar-based localization <br/>
          <a href="http://www.navlab.iit.edu/" target="_blank" rel="noreferrer">Navigation Laboratory</a>
          </label>
          <div class='date'>Sep 2021 - Dec 2021</div>
          <span class='circle'></span>
        </div>
        <div class='content'>
          <p>
            During my year in Chicago, I had the chance to complete a research project in the Navigation Laboratory of Illinois Tech on lidar-based localization of autonomous vehicles.
            
            
            The goal was to ensure navigation integrity and safety in an area with low GNSS availability (Chicago downtown here). A Velodyne’s Puck lidar sensor was then used to add landmark detection to compensate for IMU drift. The interesting twist in this project was the use of the Error Correction Codes domain to ensure landmark identification against the misassociation problem (basically we want to identify which object, trees in this case, was detected). I researched the implementation of Hamming and BCH codes for this objective and, by the end I established a Misdetection Error Model to quantify the Probability of Hazardously Misleading Information. 
            <br/>
            Click <a class="links_profile" href="https://github.com/NathanTouboul/ResearchProject_LidarVisualization" target="_blank" rel="noreferrer">here</a> to check the GitHub repository.
            <br/>

          </p>

      </div>
      </li>

      <li class='work'>
        <input class='radio' id='work4' name='works' type='radio'></input>
        <div class="relative">
          <label for='work4'> Machine Learning Engineer - Intern <br/>  
          <a href="https://www.kapaix.com/" target="_blank" rel="noreferrer">Kapaix Ltd</a>
          </label>
          <div class='date'>Summer 2021</div>
          <span class='circle'></span>
        </div>
        <div class='content'>
          <p>
          Kapaix is a Big Data Management company, based in London. I was fortunate enough to work for 3 months in this company. The goal of this internship was to assess the quality of a massive database, containing mostly time series. I designed and trained neural network architectures for anomaly detection purposes. The neural networks were analyzing discrepancies in frequency and amplitude in the time series. 
          <br/>
          I preprocessed the dataset through the construction of histograms with variable time frames: I used Principal Component Analysis and k-means clustering as a first analysis tool.
          <br/>
          <strong>
          Two models were built: classification (CNN) and pattern recognition (auto-encoder) using Python: Keras - TensorFlow - Pandas</strong>
          
          </p>
        </div>
      </li>

      <li class='work'>
        <input class='radio' id='work5' name='works' type='radio'></input>
        <div class="relative">
          <label for='work5'> Master's Thesis: Isogeometric Representation of Turbojet Blades <br/>
          Structure Mechanics laboratory -  INSA
          </label>
          <div class='date'>Sep 2020 - Dec 2020</div>
          <span class='circle'></span>
        </div>
        <div class='content'>
          <p>
          This thesis, in collaboration with Safran Aircraft Engines was centered around the merging of CAD (Computer-Aided Design) and FEA (Finite Element Analysis) methods through Non-Uniform Rational Basis Spline <strong>(NURBS)</strong> manipulations.
          The main goal of this thesis was to create an algorithm to generate a fillet between two CAD volumes. This fillet would be used to join the blade and its root volumes of a turbojet engine.
          I implemented a fillet patch mesh to join those 3D curves on Python with Numpy and Geomdl.
          I also analyzed the structure of these engine blades using parametrization models by projection, interpolation, and approximation of splines.
          </p>
        </div>
      </li>

      <li class='work'>
        <input class='radio' id='work6' name='works' type='radio'></input>
        <div class="relative">
          <label for='work6'> Master of Science: Mechatronics <br/>
          <a href="https://www.insa-lyon.fr/en/" target="_blank" rel="noreferrer">INSA Lyon</a> (France)
          </label>
          <div class='date'>2018 - 2020</div>
          <span class='circle'></span>
        </div>
        <div class='content'>
          <p>
          <br/>
          Click <Link class="links_profile" to="" target="_blank" rel="noreferrer">here</Link> to view my diploma. (available next spring)
          <br/>
          </p>
        </div>
      </li>

      <li class='work'>
        <input class='radio' id='work7' name='works' type='radio'></input>
        <div class="relative">
          <label for='work7'>Bachelor of Engineering: Electronics and Computer Science <br/>  
          <a href="https://www.cpe.fr/en/" target="_blank" rel="noreferrer">CPE Lyon</a> (France)
          </label>
          <div class='date'>2018 - 2020</div>
          <span class='circle'></span>
        </div>
        <div class='content'>
          <p>
          Click <Link class="links_profile" to="" target="_blank" rel="noreferrer">here</Link> to view my diploma.
          </p>
        </div>
      </li>
    </ul>
    
    
  </Layout>
)




export default ProfilePage
