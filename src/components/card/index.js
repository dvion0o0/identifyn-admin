import React from 'react'
import { toAbsoluteUrl } from '../../utils/assetHelper'
import "./style.scss"

const Index = ({item, index, className}) => {
  return (
    <article key={index}>
      <div className="price">{item.price}</div>
      <span className='cart-hover' style={{ width: '44px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', background: 'var(--primary-color)', color: 'var(--primary-color)' }}>
      <i class="bx bx-cart" aria-hidden="true" style={{ fontSize: '25px', color: 'white' }}></i>
          </span>
    <img src={item.image} alt="" loading='lazy' />
    <div className="info-container">
    <div className="top-part">
    <p>{item.title}</p>
    </div>
    </div> 
</article>
  )
}

export default Index