import React, { useContext, useState } from 'react'
import "./style.scss"
import { toAbsoluteUrl } from '../../../utils/assetHelper';

const Index = ({setOpenMethodologyModal}) => {

  return (
    <div className="small-modal-wrapper">
      <div className={`small-modal-content team-modal-content`}>
        <span className='close' onClick={() => setOpenMethodologyModal(false)} ><i className="fas fa-times"></i></span>
        <div className="img-container">
          <img src={toAbsoluteUrl('/media/methodology.png')} alt="" />
        </div>
        <div className="team-text">
          <h3>Identifyn™ Methodology</h3>
          <div style={{height: '380px', overflowY: 'auto'}}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic ipsum sit, nulla corporis quidem nesciunt, deleniti reprehenderit iure quis ut id ad consequatur corrupti.</p>
          </div>
          <button className='btn transparent' onClick={() => {
            setOpenMethodologyModal(false)
          }}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Index