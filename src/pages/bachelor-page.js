import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import bachelor from "../docs/IIT_Chicago_master.pdf"

const BachelorPage = () => (

  <Layout className = "layout">
    <Seo title="Bachelor Page"/>
    <div className="pdf_embeded">    
      <iframe className="pdf" src={bachelor} frameborder='0'></iframe>
    </div>
  </Layout>
  
)

export default BachelorPage
