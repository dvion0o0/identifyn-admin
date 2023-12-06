import React, { useContext, useState } from 'react'
import "./style.scss"
import { AuthContext } from "../../../context/auth";
import Input from "../../Input";

const Index = () => {
  const { setRestoreModal, setChangePasswordModal } = useContext(AuthContext)
  const [type, setType] = useState('restore')
  const [email, setEmail] = useState('')

  return (
    <div className="small-modal-wrapper">
      <div className="small-modal-content">
        <span style={{ width: '44px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', background: '#fff2e5', color: 'var(--primary-color)' }}>
          <i class="fal fa-envelope"></i>
        </span>
        <span className='close' onClick={() => setRestoreModal(false)}><i className="fas fa-times"></i></span>
        {type === 'restore' ? <>
          <h2>Restore Password </h2>
          <p>Don’t worry, we’ll send you a restore link
            to your email address </p>
          <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', marginTop: '20px' }}>
            <h4>Enter your email address below</h4>
            <Input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button className='btn' onClick={() => {
            setType('check-email')
          }}>Continue</button>
          <button className='btn transparent' onClick={() => {
            setRestoreModal(false)
          }}>Cancel</button>
        </>
          : type === 'check-email' &&
          <>
            <h2>Check Email </h2>
            <p>We sent a link to reset your password to {email}.</p>
            <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', marginTop: '20px' }}>
              <p>Didn't get it? <span style={{ color: 'var(--primary-color)', cursor: 'pointer' }}>Resend</span></p>
            </div>
            <button className='btn' onClick={() => {
              setRestoreModal(false)
              setChangePasswordModal(true)
            }}>Okay</button>
          </>
        }
      </div>
    </div>
  )
}

export default Index