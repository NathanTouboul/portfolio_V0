import * as React from "react"
import {Swiper} from "swiper/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./projects-page.css"
import projects_data from "../assets/projects-data"
import ProjectItem from "../components/project-item"

const ProjectsPage = () => (

  <Layout>
    <Seo title="Project Page" />
    <div class="title_profile_page">
    <h1>  My Projects </h1>
    </div>

    <div className="container_project">
      <div className="projects__allItems">
        <Swiper>
          {projects_data.map((project, index) => {
              if(index > 1) return;
              return <ProjectItem/>;
          })}
        </Swiper>  
        
      </div>
    </div>

  </Layout>

)


export default ProjectsPage 
