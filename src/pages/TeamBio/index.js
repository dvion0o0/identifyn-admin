import React from 'react'
import Layout from "../../components/layout"
import { HeaderWrapper, ContentWrapper } from './style'

const Index = () => {
  return (
    <Layout>
     <HeaderWrapper>
     <div className="header-title"><span className='sub-title'>Team Bios</span></div>
     <div className="header-search-container">      
     </div>
     </HeaderWrapper>
     <ContentWrapper>
     <div style={{width:'100%', height:'100%', gap:'20px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'var(--primary-color)'}}>
     <i class="fas fa-tasks" style={{fontSize:'40px'}}></i>
       <h1>Work In Progress</h1>
     </div>
     </ContentWrapper>
    </Layout>
  )
}

export default Index