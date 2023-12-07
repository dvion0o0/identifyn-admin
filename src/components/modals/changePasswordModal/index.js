import React, { useContext, useState } from 'react'
import "./style.scss"
import { AuthContext } from "../../../context/auth";
import Input from "../../Input";

const Index = () => {
  const { setOpenAddressModal, setNotification } = useContext(AuthContext)
 const [password, setPassword] = useState('')
 const [confirmPassword, setConfirmPassword] = useState('')
 const [error, setError] = useState('')

  return (
    <div className="small-modal-wrapper">
      <div className="small-modal-content">
        <span className='close' onClick={() => setOpenAddressModal(false)}><i className="fas fa-times"></i></span>
          <h2>Shipping Address <span>Primary</span> </h2>
          <div className="address-details">
            <div className="first-container">
              <div className="address-content">
                <h5>First and Last Name</h5>
                <h4>{`<First and Last Name Data>`}</h4>
              </div>
              <div className="address-content">
                <h5>Department</h5>
                <h4>{`<Department Data>`}</h4>
              </div>
              <div className="address-content">
                <h5>Building</h5>
                <h4>{`<Building Data>`}</h4>
              </div>
              <div className="address-content">
                <h5>Attention To</h5>
                <h4>{`<Attention To Data>`}</h4>
              </div>
              <div className="address-content">
                <h5>City</h5>
                <h4>{`<City Data>`}</h4>
              </div>
              <div className="address-content">
                <h5>Zip Code</h5>
                <h4>{`<Zip Code Data>`}</h4>
              </div>
            </div>
            <div className="second-container">
            <div className="address-content">
                <h5>Company/Institution</h5>
                <h4>{`<Company/Institution Data>`}</h4>
              </div>
              <div className="address-content">
                <h5>Street Address</h5>
                <h4>{`<Street Address Data>`}</h4>
              </div>
              <div className="address-content">
                <h5>Lab</h5>
                <h4>{`<Lab Data>`}</h4>
              </div>
              <div className="address-content">
                <h5>Country</h5>
                <h4>{`<Country Data>`}</h4>
              </div>
              <div className="address-content">
                <h5>State</h5>
                <h4>{`<State Data>`}</h4>
              </div>
            </div>
          </div>
          <button className='btn' onClick={() => {
            setOpenAddressModal(false)
          }}>Okay</button>
      </div>
    </div>
  )
}

export default Index