import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { AuthContext } from "../../../context/auth";
import NewMemberModal from "./newMemberModal"

const Index = ({setOpenAddMemberModal, openAddMemberModal, selectedMember, setSelectedMember, setTeamsData, teamsData}) => {
  const [role, setRole] = useState('')


  useEffect(() => {
    if(selectedMember){
      setRole(selectedMember.role)
    }
  },[selectedMember])


const reset = () => {
  setRole('')
  setSelectedMember(null)
}


if(role){
  return <NewMemberModal setOpenAddMemberModal={setOpenAddMemberModal} openAddMemberModal={openAddMemberModal} role={role} selectedMember={selectedMember} reset={reset} setTeamsData={setTeamsData} teamsData={teamsData} />
}

  return (
    <div className="small-modal-wrapper">
      <div className="small-modal-content">
        <span className='close' onClick={() => {
          setOpenAddMemberModal(false)
          reset() 
          }}><i className="fas fa-times"></i></span>
          <h2>Select Role</h2>
          <div className="items-container">
            <button onClick={() => setRole('Leadership')} style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }} className={role === "Leadership" && 'tab-active'} >Leadership</button>
              <button onClick={() => setRole('Team')} style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }} className={role === "Team" && 'tab-active'}>Team</button> 
              <button onClick={() => setRole('Advisors')} style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }} className={role === "Advisors" && 'tab-active'}>Advisor</button> 
            </div>
          <button className='btn transparent' onClick={() => {
            setOpenAddMemberModal(false)
            reset()
          }}>Cancel</button>
      </div>
    </div>
  )
}

export default Index