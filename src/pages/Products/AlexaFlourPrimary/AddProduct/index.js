import React, { useState } from 'react'
import Layout from "../../../../components/layout"
import { HeaderWrapper, ContentWrapper, ProtienInformation, ProductInformation, DyeInformation, PriceInformation, ProductFormulation, ImageInformation } from './style'
import Input from '../../../../components/Input'



const Index = ({setOpenAddProduct}) => {
  const [productType, setProductType] = useState('')
  const [subProductType, setSubProductType] = useState('')
  const [productNumber, setProductNumber] = useState('')
  const [productMonoclonal, setProductMonoclonal] = useState('')
  const [monoclonal, setMonoclonal] = useState('')
  const [protienApplication, setProtienApplication] = useState([])

  return (
    <Layout>
      <HeaderWrapper>
        <div className="header-title"><span className='sub-title'>Add Product</span></div>
        <div className="header-search-container">
          <button className='transparent' onClick={() => setOpenAddProduct(false)} >Cancel</button>
          <button className='btn'>Add Product</button>
        </div>
      </HeaderWrapper>
      <ContentWrapper>
        <div className="catalog-options">
          <div className="first-container">
            <Input radio value="PA - Primary Antibody" name="productType" onChange={(e) => setProductType(e.target.value)} className={productType === 'PA - Primary Antibody' ? 'active-radio radio-containers' : 'radio-containers'} />
            {productType === 'PA - Primary Antibody' &&
              <div className="sub-product">
                <div className="radio-wrapper">
                  <Input radio value="PA-MM - Mouse Monoclonal" name="subProductType" onChange={(e) => setSubProductType(e.target.value)} className={productType === 'PA-MM - Mouse Monoclonal' ? 'active-radio radio-containers' : 'radio-containers'} />
                  {subProductType === 'PA-MM - Mouse Monoclonal' && <Input type='text' placeholder={'000001'} />}
                </div>
                <div className="radio-wrapper">
                  <Input radio value="PA-MR - Mouse Recombinant" name="subProductType" onChange={(e) => setSubProductType(e.target.value)} className={productType === 'PA-MR - Mouse Recombinant' ? 'active-radio radio-containers' : 'radio-containers'} />
                  {subProductType === 'PA-MR - Mouse Recombinant' && <Input type='text' placeholder={'000001'} />}
                </div>
                <div className="radio-wrapper">
                  <Input radio value="PA-RR - Rabbit Recombinant" name="subProductType" onChange={(e) => setSubProductType(e.target.value)} className={productType === 'PA-RR - Rabbit Recombinant' ? 'active-radio radio-containers' : 'radio-containers'} />
                  {subProductType === 'PA-RR - Rabbit Recombinant' && <Input type='text' placeholder={'000001'} />}
                </div>
                <div className="radio-wrapper">
                  <Input radio value="PA-RP - Rabbit Polyclonal" name="subProductType" onChange={(e) => setSubProductType(e.target.value)} className={productType === 'PA-RP - Rabbit Polyclonal' ? 'active-radio radio-containers' : 'radio-containers'} />
                  {subProductType === 'PA-RP - Rabbit Polyclonal' && <Input type='text' placeholder={'000001'} />}
                </div>
                <div className="radio-wrapper">
                  <Input radio value="PA-RTM - Rat Monoclonal" name="subProductType" onChange={(e) => setSubProductType(e.target.value)} className={productType === 'PA-RTM - Rat Monoclonal' ? 'active-radio radio-containers' : 'radio-containers'} />
                  {subProductType === 'PA-RTM - Rat Monoclonal' && <Input type='text' placeholder={'000001'} />}
                </div>
              </div>
            }
            <div className="radio-wrapper">
              <Input radio value="DC - Primary Antibody Direct Conjugate" name="productType" onChange={(e) => setProductType(e.target.value)} className={productType === 'DC - Primary Antibody Direct Conjugate' ? 'active-radio radio-containers' : 'radio-containers'} />
              {productType === 'DC - Primary Antibody Direct Conjugate' && <Input type='text' placeholder={'000001'} />}
            </div>
            <div className="radio-wrapper">
              <Input radio value="SA - Secondary Antibody" name="productType" onChange={(e) => setProductType(e.target.value)} className={productType === 'SA - Secondary Antibody' ? 'active-radio radio-containers' : 'radio-containers'} />
              {productType === 'SA - Secondary Antibody' && <Input type='text' placeholder={'000001'} />}
            </div>
            <div className="batch-wrapper">
              <h4>Batch Number</h4>
              <p>Enter batch number for selected product</p>
              <div className="batch-input-wrapper">
                <Input type='text' placeholder={'B00001'} />
                <Input type='text' placeholder={'B00001'} />
                <Input type='text' placeholder={'B00001'} />
                <Input type='text' placeholder={'B00001'} />
                <Input type='text' placeholder={'B00001'} />
                <Input type='text' placeholder={'B00001'} />
              </div>
            </div>
          </div>
          <div className="second-container">
            <div className="radio-wrapper">
              <Input radio value="BU" name="productType" onChange={(e) => setProductType(e.target.value)} className={productType === 'BU' ? 'active-radio radio-containers' : 'radio-containers'} />
              {productType === 'BU' && <Input type='text' placeholder={'000001'} />}
            </div>
            <div className="radio-wrapper">
              <Input radio value="GL" name="productType" onChange={(e) => setProductType(e.target.value)} className={productType === 'GL' ? 'active-radio radio-containers' : 'radio-containers'} />
              {productType === 'GL' && <Input type='text' placeholder={'000001'} />}
            </div>
            <div className="radio-wrapper">
              <Input radio value="MM" name="productType" onChange={(e) => setProductType(e.target.value)} className={productType === 'MM' ? 'active-radio radio-containers' : 'radio-containers'} />
              {productType === 'MM' && <Input type='text' placeholder={'000001'} />}
            </div>
          </div>
        </div>
        <ProtienInformation>
          <div className="header">
            <h4>Protein Information</h4>
          </div>
          <div className="content">
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Protein Name<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Human prefix for Protein name, Write protein name after human</p>
                <div className="single-input-wrapper">
                  <Input type='text' placeholder={'Enter Name'} style={{ marginTop: '10px', paddingLeft: '80px' }} otherText={'Human'} />
                </div>
              </div>
              <div className="reference-wrapper">
                <h4>Protein Description<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Write description, 500 Characters​</p>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Write Product Description'
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="second-container">
              <div className="reference-wrapper">
                <h4>Reference<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Add reference links</p>
                <div className="reference-input-wrapper">
                  <Input type='text' placeholder={'Enter Link'} />
                  <Input type='text' placeholder={'Enter Link'} />
                  <Input type='text' placeholder={'Enter Link'} />
                  <Input type='text' placeholder={'Enter Link'} />
                  <Input type='text' placeholder={'Enter Link'} />
                  <Input type='text' placeholder={'Enter Link'} />
                  <Input type='text' placeholder={'Enter Link'} />
                  <Input type='text' placeholder={'Enter Link'} />
                </div>
              </div>
            </div>
          </div>
        </ProtienInformation>
        <ProductInformation>
          <div className="header">
            <h4>Product Information</h4>
          </div>
          <div className="content">
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Product Name<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Product name appears according selection</p>
                <div className="single-input-wrapper">
                  <Input type='text' placeholder={'Enter Name'} value={'Mouse Monoclonal Anti-Human PARP1'} isDisabled />
                </div>
              </div>
              <div className="reference-wrapper">
                <h4>Immunogen <span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Variant of the protein​</p>
                <div className="single-input-wrapper">
                  <Input type='text' placeholder={'Type Here'} />
                </div>
              </div>
            </div>
            <div className="second-container">
              <div className="reference-wrapper">
                <p>Select any one option from above</p>
                <div className="multiple-input-wrapper">
                  <button className={`btn ${productMonoclonal === 'Mouse Monoclonal' ? 'active-btn' : ''}`} onClick={(e) => setProductMonoclonal('Mouse Monoclonal')}>Mouse Monoclonal</button>
                  <button className={`btn ${productMonoclonal === 'Rabbit Recombinant Monoclonal​' ? 'active-btn' : ''}`} onClick={(e) => setProductMonoclonal('Rabbit Recombinant Monoclonal​')}>Rabbit Recombinant Monoclonal​</button>
                  <button className={`btn ${productMonoclonal === 'Rabbit Polyclonal​' ? 'active-btn' : ''}`} onClick={(e) => setProductMonoclonal('Rabbit Polyclonal​')}>Rabbit Polyclonal​</button>
                  <button className={`btn ${productMonoclonal === 'Rat Monoclonal​' ? 'active-btn' : ''}`} onClick={(e) => setProductMonoclonal('Rat Monoclonal​')}>Rat Monoclonal​</button>
                  <button className={`btn ${productMonoclonal === 'Mouse Recombinant Monoclonal​' ? 'active-btn' : ''}`} onClick={(e) => setProductMonoclonal('Mouse Recombinant Monoclonal​')}>Mouse Recombinant Monoclonal​</button>
                </div>
              </div>
              {productMonoclonal && <div className="reference-wrapper">
                <p>Select any one {productMonoclonal}</p>
                <div className="multiple-input-wrapper">
                  <button className={`btn ${monoclonal === 'IgG1' ? 'active-btn' : ''}`} onClick={(e) => setMonoclonal('IgG1')}>IgG1</button>
                  <button className={`btn ${monoclonal === 'IgG2a' ? 'active-btn' : ''}`} onClick={(e) => setMonoclonal('IgG2a')}>IgG2a</button>
                  <button className={`btn ${monoclonal === 'IgG2b' ? 'active-btn' : ''}`} onClick={(e) => setMonoclonal('IgG2b')}>IgG2b</button>
                  <button className={`btn ${monoclonal === 'IgG2c' ? 'active-btn' : ''}`} onClick={(e) => setMonoclonal('IgG2c')}>IgG2c</button>
                  <button className={`btn ${monoclonal === 'IgG3' ? 'active-btn' : ''}`} onClick={(e) => setMonoclonal('IgG3')}>IgG3</button>
                </div>
              </div>
              }
            </div>
          </div>
          <div className="reference-wrapper" style={{padding:'0 44px'}}>
                <h4>Dyes<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Select Dyes</p>
                <div className="multiple-input-wrapper">
                  <button className='btn'>Alexa 405</button>
                  <button className='btn'>Alexa 488</button>
                  <button className='btn'>Alexa 532</button>
                  <button className='btn'>Alexa 555</button>
                  <button className='btn'>Alexa 594</button>
                  <button className='btn'>Alexa 647</button>
                  <button className='btn'>Alexa 680</button>
                  <button className='btn'>Alexa 750</button>
                  <button className='btn'>Alexa 430</button>
                  <button className='btn'>Alexa 546</button>
                  <button className='btn'>Alexa 532</button>
                  <button className='btn'>Alexa 568</button>
                  <button className='btn'>Alexa 610</button>
                  <button className='btn'>Alexa 633</button>
                  <button className='btn'>Alexa 635</button>
                  <button className='btn'>Alexa 660</button>
                  <button className='btn'>Alexa 700</button>
                  <button className='btn'>Alexa 790</button>
                </div>
              </div>
        </ProductInformation>
        {/* dye characterstics */}
        <DyeInformation>
          <div className="header">
            <h4>Product Formulation</h4>
          </div>
          <div className="content" style={{gridTemplateColumns:'1fr 1fr 1fr'}}>
          <div className="first-container">
              <div className="reference-wrapper">
                <h4>Excitation Wavelength​​<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Enter Excitation Wavelength</p>
                <div className="single-input-wrapper">
                 <Input type="text" placeholder='Type Here'/>
                </div>
              </div>
              <div className="reference-wrapper">
                <h4>Molecular Weight​​<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Enter Molecular Weight</p>
                <div className="single-input-wrapper">
                 <Input type="text" placeholder='Type Here'/>
                </div>
              </div>
            </div>
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Emission Wavelength<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Enter Emission Wavelength</p>
                <div className="single-input-wrapper">
                <Input type="text" placeholder='Type Here'/>
                </div>
              </div>
              <div className="reference-wrapper">
                <h4>Emission Color<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Enter Emission Color</p>
                <div className="single-input-wrapper">
                 <Input type="text" placeholder='Type Here'/>
                </div>
              </div>
            </div>
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Extinction Coefficient<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Enter Extinction Coefficient</p>
                <div className="single-input-wrapper">
                <Input type="text" placeholder='Type Here'/>
                </div>
              </div>
            </div>
          </div>
          </DyeInformation>
        {/* product formulation */}
        <ProductFormulation>
          <div className="header">
            <h4>Product Formulation</h4>
          </div>
          <div className="content">
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Buffer<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Select any one buffer</p>
                <div className="single-input-wrapper">
                  <button className='btn'>Phosphate Buffer</button>
                  <button className='btn'>Borate Buffer</button>
                  <button className='btn'>Tris Buffer</button>
                  <button className='btn'>Citrate Buffer</button>
                  <button className='btn'>Acetate Buffer</button>
                </div>
              </div>
            </div>
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Buffer Molarity(mM)<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Select any one buffer molarity</p>
                <div className="reference-input-wrapper">
                  <button className='btn'>10</button>
                  <button className='btn'>20</button>
                  <button className='btn'>30</button>
                  <button className='btn'>40</button>
                </div>
              </div>
            </div>
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>pH<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Select any one pH</p>
                <div className="reference-input-wrapper">
                  <button className='btn'>5.5</button>
                  <button className='btn'>5.8</button>
                  <button className='btn'>6.0</button>
                  <button className='btn'>6.2</button>
                  <button className='btn'>6.4</button>
                  <button className='btn'>6.6</button>
                  <button className='btn'>6.8</button>
                  <button className='btn'>7.0</button>
                  <button className='btn'>7.2</button>
                  <button className='btn'>7.8</button>
                  <button className='btn'>8.0</button>
                  <button className='btn'>8.2</button>
                </div>
              </div>
            </div>
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Preservative<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Select any one Preservative</p>
                <div className="single-input-wrapper">
                  <button className='btn'>Proclin 300</button>
                  <button className='btn'>SDS</button>
                  <button className='btn'>Azide</button>
                </div>
              </div>
            </div>
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Cyropreservative<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Select any one Cyropreservative</p>
                <div className="single-input-wrapper">
                  <button className='btn'>Glycerol</button>
                  <button className='btn'>PEG</button>
                </div>
              </div>
            </div>
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Storage<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Select multiple storage</p>
                <div className="single-input-wrapper">
                  <button className='btn'>-80°C</button>
                  <button className='btn'>-20°C</button>
                  <button className='btn'>4°C</button>
                </div>
              </div>
            </div>
          </div>
          <div className="content" style={{gridTemplateColumns:'1fr 1fr 1fr', marginTop:'30px'}}>
          <div className="first-container">
              <div className="reference-wrapper">
                <h4>Concentration(mg/mL)​​<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Enter Concentration</p>
                <div className="single-input-wrapper">
                 <Input type="text" placeholder='Type Here'/>
                </div>
              </div>
            </div>
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Effective Dillusional Microscopy<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Enter Dillusion Microscopy</p>
                <div className="single-input-wrapper">
                <Input type="text" placeholder='Type Here'/>
                </div>
              </div>
            </div>
            <div className="first-container">
              <div className="reference-wrapper">
                <h4>Western Bloating<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Enter Western Bloating</p>
                <div className="single-input-wrapper">
                <Input type="text" placeholder='Type Here'/>
                </div>
              </div>
            </div>
          </div>
        </ProductFormulation>
        {/* other */}
        <ProductInformation>
          <div className="header">
            <h4>Other</h4>
          </div>
          <div className="content">
            <div className="first-container">
            <div className="reference-wrapper">
            <h4>Protein Application<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Select multiple Application</p>
                <div className="multiple-input-wrapper">
                  <button className='btn'>Multiplexed Immunoassay</button>
                  <button className='btn'>Western Blotting</button>
                  <button className='btn'>Multiplexed Protein Expression Testing</button>
                </div>
              </div>
            </div>
            <div className="second-container">
              <div className="reference-wrapper">
              <h4>Microscopy Application<span style={{ color: '#DC1E00' }}>*</span></h4>
                <p>Select Microscopy Application</p>
                <div className="multiple-input-wrapper">
                <button className='btn'>Widefield</button>
                  <button className='btn'>Widefield SIM</button>
                  <button className='btn'>Confocal</button>
                  <button className='btn'>Super Resolution Airyscan</button>
                  <button className='btn'>Super Resolution - SIM</button>
                  <button className='btn'>Super Resolution - SIM²</button>
                  <button className='btn'>Super Resolution PALM</button>
                  <button className='btn'>Super Resolution / Single Molecule - STORM</button>
                </div>
              </div>
            </div>
          </div>
        </ProductInformation>
        {/* images */}
        <ImageInformation>
          <div className="header">
            <h4>Upload Images and Methods</h4>
          </div>
          <div className="content">
              <div className="image-card">
                <h4>Western Blot</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Western Blot</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
              <div className="image-card">
                <h4>Multiplexed Protein Expression and Host Cell Protein​</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Multiplexed Protein Expression and Host Cell Protein​</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
              <div className="image-card">
                <h4>Widefield</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Widefield</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
              <div className="image-card">
                <h4>Widefield SIM</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Widefield SIM</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
              <div className="image-card">
                <h4>Confocal</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Confocal</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
              <div className="image-card">
                <h4>Super Resolution – ​ Airyscan​</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Super Resolution – ​ Airyscan​</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
              <div className="image-card">
                <h4>Super Resolution – ​ SIM​</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Super Resolution – ​ SIM​</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
              <div className="image-card">
                <h4>Super Resolution – ​SIM²</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Super Resolution – ​SIM²</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
              <div className="image-card">
                <h4>Super Resolution – ​ PALM​</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Super Resolution – ​ PALM​</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
              <div className="image-card">
                <h4>Super Resolution – ​Single Molecule​ STORM​</h4>
                <div className="img-container">
                  <input type="file" className='image-file' accept="image/*" />
                  <i class="far fa-upload"></i>
                  <p>Super Resolution – ​Single Molecule​ STORM​</p>
                </div>
                <div className="method-header">
                  <p>Method</p>
                  <p>500 characters limit</p>
                </div>
                <div className="single-input-wrapper">
                  <textarea
                    style={{ resize: "none", borderRadius: "8px" }}
                    placeholder='Type Here...'
                  ></textarea>
                </div>
              </div>
          </div>
        </ImageInformation>
        {/* price */}
        <PriceInformation>
          <div className="header">
            <h4>Price</h4>
          </div>
          <div className="content">
            <div className="reference-wrapper" style={{width: '100%'}}>
                <div className="multiple-input-wrapper">
                 {Array(40).fill(49).map((value, index) => <button className='btn' key={index}>{value + (index * 50)}</button>)}
                </div>
              </div>
          </div>
        </PriceInformation>
      </ContentWrapper>
    </Layout>
  )
}

export default Index