import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import resume from "../docs/resume.pdf"
import "./resume-page.css"

const ResumePage = () => (

  <Layout className = "layout">
    <Seo title="Resume Page"/>
    <div className="pdf_embeded">    
      <iframe className="pdf" src={resume} frameborder='0'></iframe>
    </div>
  </Layout>
  
)

export default ResumePage
