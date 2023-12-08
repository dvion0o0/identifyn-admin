import React, {useState} from 'react'
import { DrawerWrapper } from './style'
import {toAbsoluteUrl} from '../../../utils/assetHelper'
import MethodologyModal from '../../modals/MethodologyModal'

const Index = ({setOpenItemPreviewModal, setOpenAddProduct}) => {
    const [openMethodologyModal, setOpenMethodologyModal] = useState(false)
    const [productTab, setProductTab] = useState("primary")
    const [selectedProduct, setSelectedProduct] = useState('Mouse Monoclonal')


  return (
    <>
    <DrawerWrapper>
        <div className="drawer-modal-content">
            <div className="header">
               <h2>Anti-Human PAR​P1</h2>
               <div className="icons-container">
                    <i className='fas fa-pencil' onClick={() => {
                        setOpenAddProduct(true)
                        setOpenItemPreviewModal(false)    
                        }}></i>
                  <i className='fas fa-times' onClick={() => setOpenItemPreviewModal(false)}></i>
                </div> 
            </div>
            <div className="tab-container">
              <button style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }} className={productTab === "primary" && 'tab-active'} disabled >Primary Antibodies</button>
              <button style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }} className={productTab === "alexaflour" && 'tab-active'}  disabled>AlexaFluor™ Primary Antibodies</button>
            </div>
           {productTab === 'alexaflour' &&  <button className='dye-btn' disabled >Dye: 405</button> }
            <div className="items-container">
            <button style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }} className={selectedProduct === "Mouse Monoclonal" && 'tab-active'} disabled >Mouse Monoclonal</button>
              <button style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }} className={selectedProduct === "alexaflour" && 'tab-active'}  disabled>Mouse Recombitant Monoclonal</button> 
              <button style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }} className={selectedProduct === "alexaflour" && 'tab-active'}  disabled>Rabbit Polyclonal</button> 
              <button style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }} className={selectedProduct === "alexaflour" && 'tab-active'}  disabled>Rabbit Recombitant Monoclonal</button> 
              <button style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }} className={selectedProduct === "alexaflour" && 'tab-active'}  disabled>Rat Monoclonal</button> 
            </div>
            <div className="item-details-container">
                <div className="item-detail-header">
                    <div className="left-container">
                    <h4 style={{color:'var(--primary-color)'}}>Mouse Monoclonal Anti-Human PARP1, IgG1</h4>
                     <h5>Cat ID# - PA000001</h5>
                    </div>
                    <span>CoA</span>
                </div>
                <div className="item-content">
                    <div className="left-container">
                        <h4>Concentration</h4>
                        <h4>Buffer</h4>
                        <h4>pH</h4>
                        <h4>Storage</h4>
                        <h4>Applications</h4>
                        <h4>Price</h4>
                    </div>
                    <div className="right-container">
                    <h4>10 mg/ml</h4>
                        <h4>10mM Phosphate Buffer</h4>
                        <h4>6.6</h4>
                        <h4>-80°C</h4>
                        <div className="application-container">
                        <span onClick={() => setOpenMethodologyModal(true)}>WB</span>
                        <span onClick={() => setOpenMethodologyModal(true)}>FIA</span>
                        <span onClick={() => setOpenMethodologyModal(true)}>IF</span>
                        <span onClick={() => setOpenMethodologyModal(true)}>SRM</span>
                        <span onClick={() => setOpenMethodologyModal(true)}>STORM</span>
                        </div>
                        <h4>$99.00</h4>
                    </div>
                </div>
            </div>
            <div className="item-image-container">
                <div className="images-container">
                    <div className="image" onClick={() => setOpenMethodologyModal(true)}>
                        <img src={toAbsoluteUrl('/media/preview1.png')} alt="" />
                        <h6>Western Blot</h6>
                    </div>
                    <div className="image" onClick={() => setOpenMethodologyModal(true)}>
                        <img src={toAbsoluteUrl('/media/preview2.png')} alt="" />
                        <h6>Multiplexed Immunoassay​</h6>
                    </div>
                    <div className="image" onClick={() => setOpenMethodologyModal(true)}>
                        <img src={toAbsoluteUrl('/media/preview3.png')} alt="" />
                        <h6>Multiplexed Protein Expression and Host Cell Protein​</h6>
                    </div>
                    <div className="image" onClick={() => setOpenMethodologyModal(true)}>
                        <img src={toAbsoluteUrl('/media/preview4.png')} alt="" />
                        <h6>Widefield​</h6>
                    </div>
                </div>
                <div className="buttons-container">
                    <button><i className='fas fa-chevron-left'></i></button>
                    <div className="dots">
                        <span className='active-dot'></span>
                        <span></span>
                        <span></span>
                    </div>
                    <button><i className='fas fa-chevron-right'></i></button>
                </div>
            </div>
        </div>
    </DrawerWrapper>
    {openMethodologyModal && <MethodologyModal setOpenMethodologyModal={setOpenMethodologyModal} /> }
    </>
  )
}

export default Index