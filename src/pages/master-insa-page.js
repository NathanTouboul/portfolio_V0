import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import master from "../docs/INSA_attestation.pdf"

const MasterInsaPage = () => (

  <Layout className = "layout">
    <Seo title="Insa master Page"/>
    <div className="pdf_embeded">    
      <iframe className="pdf" src={master} frameborder='0'></iframe>
    </div>
  </Layout>
  
)

export default MasterInsaPage
