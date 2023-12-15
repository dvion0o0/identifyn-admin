import React, { useState, useContext } from 'react'
import "./style.scss"
import { toAbsoluteUrl } from "../../utils/assetHelper"
import Input from "../../components/Input"
import { AuthContext } from '../../context/auth'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from '../../components/Checkbox'

const Index = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  return (
    <div>
      <div className="signin-container">
        <div className="left-container">
          <span style={{ width: '44px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', background: '#fff2e5', color: 'var(--primary-color)' }}>
            <i class="fas fa-sign-in-alt"></i>
          </span>
          <div>
            <h1>Welcome to IDENTiFYN™</h1>
            <p>Please login to continue.</p>
          </div>
          <div className="form-container">
            <Input type='email' style={{ marginBottom: '20px' }} placeholder={'Email'} value={Email} onChange={(e) => setEmail(e.target.value)} />
            <Input type='password' placeholder={'Password'} value={Password} onChange={(e) => setPassword(e.target.value)} />
            <div class="checkbox-container">
              {/* <input type="checkbox" id="myCheckbox" class="checkbox" />
              <label for="myCheckbox" class="checkbox-label">Remember me?</label> */}
              <Checkbox
              label='Remember me?'
              // checked={true}
              // onChange={(e) => {
              //   if (e.target.checked) {
              //     setDisabledAllSeats(true)
              //     onDisableAllSeats(true)
              //   } else {
              //     setDisabledAllSeats(false)
              //     setSeats(tempSeats)
              //     onDisableAllSeats(false)
              //   }
              // }}
              // id='disable-all'
            />
            </div>
         
          </div>
          <button className="btn" onClick={() => {
            login({ email: Email, password: Password })
            navigate('/products/primary-antibodies')
          }
          }>Login</button>
        </div>
        <div className="right-container">
          <img src={toAbsoluteUrl('/media/Logowhite.png')} alt="" />
          <div className="content">
            <h3><span>SUPER RESOLUTION</span> <br /> LABORATORIES</h3>
            <p>Delivering unprecedented power, speed, and access to multimodal super resolution microscopy, reagents, applications, and discovery.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index