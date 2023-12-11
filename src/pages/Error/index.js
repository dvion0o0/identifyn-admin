import React from 'react'
import { toAbsoluteUrl } from '../../utils/assetHelper'
import {Link} from 'react-router-dom'
import Layout from '../../components/layout'

const Index = () => {
  return (
    <Layout>
        <div className='container' style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop:'60px'}}>
       <h1 style={{marginBottom: '20px'}}>Oops!</h1>
      <div style={{marginBottom: '20px'}} >We can't find that page.</div>
      <div>
        <img
          src={toAbsoluteUrl('/media/404-error.png')}         
          alt=''
          width={450}
        />
      </div>
      <div>
        <Link to='/products/primary-antibodies' className='btn'>
          Return Home
        </Link>
      </div>   
      </div>
    </Layout>
  )
}

export default Index