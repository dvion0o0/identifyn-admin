import React, {useContext} from 'react'
import "./style.scss"
import {AuthContext} from "../../../context/auth";

const Index = ({setDeleteModal, setOpenAddMemberModal, reset}) => {
const {setNotification} = useContext(AuthContext)


  return (
    <div className="small-modal-wrapper">
        <div className="delete-modal-content">
        <span style={{ width: '44px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', background: '#DC1E00', color: 'var(--white)' }}>
            <i class="fas fa-trash-alt"></i>
            </span>
            <h2>Are You Sure?</h2>
            <p>You are about to delete this team member.</p>
            <button className='btn' onClick={() => {
                {
                    setNotification({
                        message: "Member Deleted.",
                        type: "delete"
                    })
                    setDeleteModal(false)
                    setOpenAddMemberModal(false)
                    reset()
                }
            }}>Delete Team Member</button>
             <button className='btn transparent' onClick={() => {
                setDeleteModal(false)
            }}>Cancel</button>
        </div>
    </div>
  )
}

export default Index