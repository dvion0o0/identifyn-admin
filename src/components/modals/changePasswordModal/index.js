import React, { useContext, useState } from 'react'
import "./style.scss"
import { AuthContext } from "../../../context/auth";
import Input from "../../Input";

const Index = () => {
  const { setChangePasswordModal, setNotification } = useContext(AuthContext)
 const [password, setPassword] = useState('')
 const [confirmPassword, setConfirmPassword] = useState('')
 const [error, setError] = useState('')

  return (
    <div className="small-modal-wrapper">
      <div className="small-modal-content">
        <span style={{ width: '44px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', background: '#fff2e5', color: 'var(--primary-color)' }}>
          <i class="fal fa-lock"></i>
        </span>
        <span className='close' onClick={() => setChangePasswordModal(false)}><i className="fas fa-times"></i></span>
          <h2>Change Password </h2>
            <div className="form-container" style={{width:'100%'}}>
              <div style={{ marginTop: '32px' }}>
                <p style={{ marginBottom: '10px', color: '#9a9a9a', opacity: '1', fontSize: '14px', textAlign:'left' }}>New Password</p>
                <Input type='password' placeholder={"Enter Password"} value={password} onChange={(e) => setPassword(e.target.value)} className={error ? 'error' : ''} />
              </div>
              <div style={{ marginTop: '22px', marginBottom: '22px' }}>
                <p style={{ marginBottom: '10px', color: '#9a9a9a', opacity: '1', fontSize: '14px', textAlign:'left' }}>Confirm New Password</p>
                <Input type='password' placeholder={"Confirm Password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={error ? 'error' : ''} />
              </div>
            </div>
            <div className="password-validations" style={{width:'100%', marginBottom:'20px'}}>
              <span style={{ color: '#6C6A73' }}>{password.length >= 8 ? <i className="fas fa-check" style={{ color: '#33C25E', marginRight: '8px' }}></i> : <i className="far fa-circle" style={{ color: '#9a9a9a', marginRight: '8px' }}></i>}At least 8 characters</span>
              <span style={{ color: '#6C6A73' }}>{ /[A-Z]/.test(password) ? <i className="fas fa-check" style={{ color: '#33C25E', marginRight: '8px' }}></i>   : <i className="far fa-circle" style={{ color: '#9a9a9a', marginRight: '8px' }}></i>}At least 1 upper case letter (A-Z).</span>
              <span style={{ color: '#6C6A73' }}>{/\d/.test(password) ? <i className="fas fa-check" style={{ color: '#33C25E', marginRight: '8px' }}></i>  : <i className="far fa-circle" style={{ color: '#9a9a9a', marginRight: '8px' }}></i>}At least 1 number (0-9).</span>
            </div>
          <button className='btn' onClick={() => {
            setNotification({status: true, message: 'Password Successfully Changed!', subMessage: '', type: 'green'})
            setChangePasswordModal(false)
          }}>Save</button>
          <button className='btn transparent' onClick={() => {
            setChangePasswordModal(false)
          }}>Cancel</button>
      </div>
    </div>
  )
}

export default Index