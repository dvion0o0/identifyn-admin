import React from 'react'
import { toAbsoluteUrl } from '../../utils/assetHelper'
import {Link} from 'react-router-dom'

const Index = () => {
  return (
        <div className='container' style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop:'60px', height:'100vh'}}>
        <i class="fas fa-cloud" aria-hidden="true" style={{ fontSize: '100px', color: 'var(--primary-color)', marginBottom:'20px'}}></i>
       <h1 style={{marginBottom: '20px', fontSize:'30px'}}>Oops!</h1>
      <div style={{marginBottom: '20px', fontSize:'30px', color:'var(--primary-color)', fontWeight:'500', textAlign:'center'}} >Mobile Version is not Supported.</div>
      <div>
      </div>
      </div>
  )
}

export default Index