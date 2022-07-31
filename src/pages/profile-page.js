import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"



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
            Currently working as a software engineer in the automotive team of Qualcomm in San Diego. I am focusing on enabling graphics and audio features for in-vehicle devices. For the moment, I have been working with OpenCL and EGL for graphics and ALSA for audio. Day to day, I mostly use C++, Python and git. I am also manipulating Linux shells and virtual machines. 
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
            Click <Link class="links_profile" to="/master_iit_page/">here</Link> to view my diploma.
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
            
            - Lidar-based localization of autonomous vehicles, in an area with low GNSS availability, with Velodyne’s Puck sensor and MATLAB
            modelization, to compensate for IMU drift. Building a method to ensure landmark identification against the misassociation problem.
            - I established a Misdetection Error Model to quantify the Probability of Hazardously Misleading Information. I derived precise σ and 3σ
            probabilities of tree misdetection, considering the noise parameters of the vehicle, the sensor, and the landmarks. I also researched
            the implementation of the Error Correction Codes domain (Hamming and BCH codes) for navigation safety.
            <br/>
            Click <a class="links_profile" href="https://github.com/NathanTouboul/ResearchProject_LidarVisualization" target="_blank" rel="noreferrer">here</a> to check the GitHub repository.
            <br/>

          </p>

      </div>
      </li>

      <li class='work'>
        <input class='radio' id='work4' name='works' type='radio'></input>
        <div class="relative">
          <label for='work4'> Internship - Machine Learning and Data Science <br/>  
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
          <label for='work5'> Master's Thesis: Isogeometric Representation of Turbojet Blades
          </label>
          <div class='date'>Sep 2020 - Dec 2020</div>
          <span class='circle'></span>
        </div>
        <div class='content'>
          <p>
          - Building an algorithmic solution to merge CAD and FEA methods through Non-Uniform Rational Basis Spline <strong>(NURBS)</strong> manipulations. I designed an adaptive fillet to join the blade and its root volumes by implementing a fillet patch mesh on  <strong>Python: NumPy - geomdl</strong>.

          - I analyzed the structure of engine blades using parametrization models by projection, interpolation, and approximation of splines.
          </p>
        </div>
      </li>

      <li class='work'>
        <input class='radio' id='work6' name='works' type='radio'></input>
        <div class="relative">
          <label for='work6'> Master of Science in Mechatronics <br/>
          <a href="https://www.insa-lyon.fr/en/" target="_blank" rel="noreferrer">INSA Lyon</a> (France)
          </label>
          <div class='date'>2018 - 2020</div>
          <span class='circle'></span>
        </div>
        <div class='content'>
          <p>
            Description
          </p>
        </div>
      </li>

      <li class='work'>
        <input class='radio' id='work7' name='works' type='radio'></input>
        <div class="relative">
          <label for='work7'>Bachelor of Engineering in Electronics and Computer Science <br/>  
          <a href="https://www.cpe.fr/en/" target="_blank" rel="noreferrer">CPE Lyon</a> (France)
          </label>
          <div class='date'>2018 - 2020</div>
          <span class='circle'></span>
        </div>
        <div class='content'>
          <p>
            Description
          </p>
        </div>
      </li>
    </ul>
    
    
  </Layout>
)




export default ProfilePage
