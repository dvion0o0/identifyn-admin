import React, {useContext} from 'react'
import "./style.scss"
import {AuthContext} from "../../../context/auth";

const Index = () => {
    const {setCompleteModal} = useContext(AuthContext)
  return (
    <div className="small-modal-wrapper">
        <div className="small-modal-content">
        <span style={{ width: '44px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', background: '#33c25e', color: 'var(--white)' }}>
            <i class="fas fa-check"></i>
            </span>
            <h2>Thank You for Registering with IDENTIFYN™ </h2>
            <button className='btn' onClick={() => {
                setCompleteModal(false)
            }}>Complete Registration</button>
        </div>
    </div>
  )
}

export default Index