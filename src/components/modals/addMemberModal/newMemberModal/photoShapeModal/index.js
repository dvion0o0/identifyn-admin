import React, { useContext, useState } from 'react'
import "./style.scss"
import Shapes from './Shapes/shapes';

const Index = ({ setPhotoShapeModal, setSelectedPhotoShape, selectedPhotoShape, setSelectedPhoto, selectedPhoto }) => {


  return (
    <div className="small-modal-wrapper">
      <div className="small-modal-content" style={{width:'800px'}}>
        <span className='close' onClick={() => {
          if(selectedPhotoShape){
            setPhotoShapeModal(false)
          }else{
            setPhotoShapeModal(false)
            setSelectedPhoto('')
          }
        }}
        ><i className="fas fa-times"></i></span>
        <h2>Select Photo Shape</h2>
          <div className="shapes-container">
            {new Array(12).fill(1).map((_, index) => (
              <Shapes key={index} shapeType={index + 1} style={{ clipPath: `url(#svgPath-${index + 1})`, cursor:'pointer', backgroundImage: `url(${selectedPhoto})` }}
                onClick={() => {
                  setSelectedPhotoShape(index + 1)
                  setPhotoShapeModal(false)
                }}
              />
            ))}
          </div>
        <button className='btn transparent' onClick={() => {
          setPhotoShapeModal(false)
        }}>Cancel</button>
      </div>
    </div>
  )
}

export default Index