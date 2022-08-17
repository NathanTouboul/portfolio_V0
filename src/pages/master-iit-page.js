import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import master from "../docs/IIT_Chicago_master.pdf"

const MasterIITPage = () => (

  <Layout className = "layout">
    <Seo title="IIT master Page"/>
    <div className="pdf_embeded">    
      <iframe className="pdf" src={master} frameborder='0'></iframe>
    </div>
  </Layout>
  
)

export default MasterIITPage
