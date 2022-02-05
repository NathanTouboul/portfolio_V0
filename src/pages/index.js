import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <section className="presentation">
      <div className="presentation__intro">
      <h1>Hi I'm Nathan </h1>
      <p> Description </p>
      </div>
      <div className="presentation__picture">
        <img class="img-me" src=".images\principal.jpg" alt="me"></img>
      </div>
    </section>

      <section className= "projects">
        <div className ="projects__software">
            <div classname="projects__software__description">
              <h2>Project 1 </h2>
              <p> Description project 1 </p>
            </div>
            <div className = "projects__software__links">
              <a href="">RepositoryProject</a>
            </div>
        </div>

        <div className ="projects__software">
          <div classname="projects__software__description">
            <h2>Project 2</h2>
            <p> Description project 2 </p>
          </div>
          <div className = "projects__software__links">
          <a href="">RepositoryProject</a>
          </div>
        </div>

        <div className ="projects__software">
          <div classname="projects__software__description">
          <h2>Project 3</h2>
          <p> Description project 3 </p>
          </div>
          <div className = "projects__software__links">
          <a href="">RepositoryProject</a>
          </div>
        </div>

        <div className="projects__software__more">
          <h1>
            More projects
            <Link to='\'></Link>
          </h1>
        </div>
      </section>

  </Layout>
)

export default IndexPage
