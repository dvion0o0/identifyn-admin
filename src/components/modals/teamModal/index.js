import React, { useContext, useState } from 'react'
import "./style.scss"
import { AuthContext } from "../../../context/auth";
import { toAbsoluteUrl } from '../../../utils/assetHelper';

const Index = () => {
  const { setTeamModal, teamModal} = useContext(AuthContext)

  return (
    <div className="small-modal-wrapper">
      <div className={`small-modal-content team-modal-content ${teamModal.team.type}`}>
        <span className='close' onClick={() => setTeamModal(null)}><i className="fas fa-times"></i></span>
        <div className="img-container">
          <img src={teamModal.team.imageFull} alt="" />
        </div>
        <div className="team-text">
          <h2>{teamModal.team.name}</h2>
          <h5>{teamModal.team.title}</h5>
          <div style={{height: '380px', overflowY: 'auto'}}>
          <p>{teamModal.team.description}</p>
          </div>
          <button className='btn transparent' onClick={() => {
            setTeamModal(false)
          }}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Index