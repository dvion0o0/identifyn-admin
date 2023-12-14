import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import Input from '../../../Input';
import { toAbsoluteUrl } from '../../../../utils/assetHelper';
import { AuthContext } from '../../../../context/auth';
import PhotoShapemodal from './photoShapeModal';
import DeleteModal from '../../DeleteModal';

const Index = ({ setOpenAddMemberModal, openAddMemberModal, role, selectedMember, reset, setTeamsData, teamsData }) => {
  const {setNotification} = useContext(AuthContext)
  const [photoShapeModal, setPhotoShapeModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const [selectedPhotoShape, setSelectedPhotoShape] = useState('');
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [position2, setPosition2] = useState('')


const onUpload = (e) => {
  const file = e.target.files[0]
  if(file){
    // const reader = new FileReader()
    // reader.onload = (e) => {
    //   document.querySelector(".avatar-uploader img").setAttribute("src", e.target.result)
    // }
    // reader.readAsDataURL(file)
    setPhotoShapeModal(true)
    setSelectedPhoto(URL.createObjectURL(file))
  }
  
}


useEffect(() => {
  if(selectedMember){
    setSelectedPhoto(selectedMember.img)
  }
},[selectedMember])



if(photoShapeModal){
  return <PhotoShapemodal setPhotoShapeModal={setPhotoShapeModal} setSelectedPhotoShape={setSelectedPhotoShape} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>
}

if(deleteModal){
  return <DeleteModal setDeleteModal={setDeleteModal} setOpenAddMemberModal={setOpenAddMemberModal} reset={reset} />
}


  return (
    <div className="small-modal-wrapper">
      <div className="small-modal-content">
        <span className='close' onClick={() => {
          setOpenAddMemberModal(false)
          reset()
          }}><i className="fas fa-times"></i></span>
       {selectedMember && <span className='delete' onClick={() => setDeleteModal(true)}>
        <i className="fas fa-trash-alt"></i></span> }
        <h2>{selectedMember ? 'Edit Member' : 'Add New Member'}</h2>
        <div className="form-container">
          <div className="img-container">
            <div className="avatar-uploader">
              <input type="file" className='image-file' accept="image/*" onChange={onUpload} />
              <img src={selectedPhoto ? selectedPhoto : toAbsoluteUrl("/media/avatar.png")} alt="" />
              <span>Change</span>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="name">Name <span>*</span></label>
            <Input type='text' placeholder='Name' defaultValue={selectedMember?.name} onChange={e => setName(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div className="input-container">
              <label htmlFor="position">Position 1 <span>*</span></label>
              <Input type='text' placeholder='Position 1' defaultValue={selectedMember?.position} onChange={e => setPosition(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="position2">Position 2 </label>
              <Input type='text' placeholder='Position 2' />
            </div>
          </div>
          <div className="input-container">
          <label htmlFor="position2">Bio <span>*</span></label>
          <textarea cols={30} rows={10}
            style={{ resize: "none", borderRadius: "8px" }}
            placeholder='Write Here...'
            defaultValue={selectedMember?.description}
          ></textarea>
          </div>
        </div>
        <button className='btn add-btn'
        disabled={!name || !position}
        onClick={() => {
          if(selectedMember){
            setNotification({
              message: "Changes Successfully Saved!",
              type: "edit"
            })
          }else{
            setNotification({
              message: "New Member Succesfully Added",
              type: "add"
            })
            const newMember = {
              id:Math.floor(Math.random() * 100),
              name:name,
              position:position,
              position2:position2,
              img:selectedPhoto,
              shapeType:selectedPhotoShape,
            }

            setTeamsData(teamsData.map((item) => {
              if(item.type === role){
                return {
                  ...item,
                  teams: [...item.teams, newMember]
                }
              }
              return item
            }))

          }
          setOpenAddMemberModal(false)
          reset()
        }}>{selectedMember ? 'Save Changes' : 'Add New Member'}</button>
        <button className='btn transparent' onClick={() => {
          setOpenAddMemberModal(false)
          reset()
        }}>Cancel</button>
      </div>
    </div>
  )
}

export default Index