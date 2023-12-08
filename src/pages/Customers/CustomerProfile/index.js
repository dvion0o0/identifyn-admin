import React, { useState, useContext } from 'react'
import Layout from "../../../components/layout"
import { HeaderWrapper, ContentWrapper } from './style'
import Input from '../../../components/Input'
import { toAbsoluteUrl } from '../../../utils/assetHelper'
import { AuthContext } from '../../../context/auth'


const Index = ({ setOpenProfile }) => {
  const {setOpenAddressModal} = useContext(AuthContext)
  const [addressTab, setAddressTab] = useState("shipping")
  const [ordersTab, setOrdersTab] = useState("current");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [current, setCurrent] = useState(2);

  const businessData = [
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 1,
    },
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 2,
    },
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 3,
    },
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 2,
    },
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 1,
    },
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 3,
    },
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 1,
    },
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 1,
    },
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 1,
    },
    {
      date: 'July 6, 2014, 01:00',
      email: 'user@useremail.com',
      account: '123456',
      order: '123456',
      total: '$198.00',
      status: 1,
    },
  ];




  return (
    <Layout>
      <HeaderWrapper>
        <div className="header-title"><span style={{ cursor: 'pointer' }} onClick={() => setOpenProfile(false)}>Customers <i className='far fa-angle-right' style={{ fontSize: '14px' }}></i></span> <span className='sub-title'>Profile Details</span></div>
        <div className="header-search-container">
          <div className="header-title">ID# <span className='sub-title'>123-123</span></div>
        </div>
      </HeaderWrapper>
      <ContentWrapper>
        <div className="profile-details-container">
          <div className="profile-details">
            <div className="profile-header">
              <img src={toAbsoluteUrl('/media/userprofile.png')} alt="" />
              <div className="profile-title">
                <h3>Leonard Hofstadter</h3>
                <h5>Microscopy facility manager microscopist</h5>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-item">
                <span>Email</span>
                <h4>user@email.com</h4>
              </div>
              <div className="profile-item">
                <span>Industry / Institute Name</span>
                <h4>Massachusetts Institute of Technology</h4>
              </div>
              <div className="profile-item">
                <span>Tax Exempt Number</span>
                <h4>123-231-439-0321</h4>
              </div>
            </div>
          </div>
          <div className="address-details">
            <div className="tab-container">
              <button style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }} className={addressTab === "shipping" && 'tab-active'} onClick={() => setAddressTab("shipping")}>Shipping Address</button>
              <button style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }} className={addressTab === "billing" && 'tab-active'} onClick={() => setAddressTab("billing")}>Billing Address</button>
            </div>
            <div className="address-wrapper">
              <div className="address">
                <div className="left-container">
                  <h4>University of California, San Francisco</h4>
                  <h4 style={{ color: '#6c6a73', fontWeight: 400 }}>505 Parnassus Ave, San Francisco, CA 94143, United States</h4>
                </div>
                <span onClick={() => setOpenAddressModal(true)}><i className="fas fa-eye"></i> View</span>
              </div>
              <div className="address">
                <div className="left-container">
                  <h4>University of California, San Francisco <span>Primary</span></h4>
                  <h4 style={{ color: '#6c6a73', fontWeight: 400 }}>505 Parnassus Ave, San Francisco, CA 94143, United States</h4>
                </div>
                <span  onClick={() => setOpenAddressModal(true)}><i className="fas fa-eye"></i> View</span>
              </div>
              <div className="address">
                <div className="left-container">
                  <h4>University of California, San Francisco</h4>
                  <h4 style={{ color: '#6c6a73', fontWeight: 400 }}>505 Parnassus Ave, San Francisco, CA 94143, United States</h4>
                </div>
                <span  onClick={() => setOpenAddressModal(true)}><i className="fas fa-eye"></i> View</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-details-container">
          <div className="tab-container">
            <button style={{ borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }} className={ordersTab === "current" && 'tab-active'} onClick={() => setOrdersTab("current")}>Current Orders</button>
            <button style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }} className={ordersTab === "completed" && 'tab-active'} onClick={() => setOrdersTab("completed")}>Completed Orders</button>
          </div>
          <div className="table-container">
            <table className={"mainTable"}>
              <thead>
                <tr>
                  <th>Date & Time </th>
                  <th>Order Number</th>
                  <th>Invoice Number</th>
                  <th>Total</th>
                  <th style={{ textAlign: 'right' }}>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {businessData.map((business, index) => {
                  return (
                    <>
                      <tr
                        key={business?.account}
                      >
                        <td>
                          {business?.date ? business?.date : "-"}
                        </td>
                        <td>
                          {business?.account ? business?.account : "-"}
                        </td>
                        <td>
                          {business?.order ? business?.order : "-"}
                        </td>
                        <td>
                          {business?.total ? business?.total : "-"}
                        </td>
                        <td style={{ display: 'flex', alignItems: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '2px' }} className={`status`}>
                          <button className={business.status === 2 ? 'in-progress' : business.status === 3 ? 'shipped' : business.status === 4 && 'completed'} style={{ color: business.status === 1 ? '#FF8D24' : business.status === 2 ? '#3F1BD0' : business.status === 3 ? '#000' : '#33C25E' }}>{business?.status === 1 ? <i class="fas fa-dot-circle"></i> : business.status === 2 ? <i class="far fa-spinner"></i> : business.status === 3 ? <i class="far fa-spinner"></i> : <i className='fas fa-check'></i>} {business.status === 1 ? 'Received' : business.status === 2 ? 'In Progress' : business.status === 3 ? 'Shipped' : 'Delivered'} </button>
                          <span>{business.status === 1 ? 'Click to In Progress' : business.status === 2 ? 'Click to Shipped' : business.status === 3 && 'Click to Complete'}</span>
                        </td>
                        <td style={{ cursor: "pointer" }} onClick={() => index === selectedIndex ? setSelectedIndex(null) : setSelectedIndex(index)}>
                          <span style={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <button style={{ fontSize: '16px', color: '#6c6a43' }}>{selectedIndex === index ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i> }</button>
                          </span>
                        </td>
                      </tr>
                      {index === selectedIndex && <tr style={{ background: 'transparent' }}>
                        <td colSpan={6}>
                          <div className="order-details">
                            <span className="horizontal-line"></span>
                            <div className="steps" style={{marginBottom:'50px'}}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              marginBottom: "19px",
                              marginTop: "20px",
                            }}
                          >
                            <div
                              style={{
                                position:'relative',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#3f1bd0",
                                color: "#ffffff",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                border: "1px solid transparent",
                              }}
                            >
                              <span
                                style={{
                                  background: current > 1 ? "#3f1bd0" : current === 1 ? "#fff" : "#9a9a9a",
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                }}
                              ></span>
                              <div className="timeline-status" style={{ position: 'absolute', bottom:'-45px', width:'max-content', left:0 }}>
                                <h5 style={{fontSize:'14px', color:'#000'}}>Received</h5>
                                <h6 style={{fontSize:'12px', color:'#9a9a9a'}}>July 6, 2014, 01:00</h6>
                              </div>
                            </div>
                            <div
                              style={{
                                height: "2px",
                                width: "33%",
                                backgroundColor: current >= 1 ? "#3f1bd0" : "#9a9a9a",
                              }}
                              className="progress-connector-line"
                            ></div>
                            <div
                              style={{
                                position:'relative',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: current >= 1 ? "#3f1bd0" : "#9a9a9a",
                                color: "#ffffff",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                border: "1px solid transparent",
                              }}
                            >
                              <span
                                style={{
                                  background: current >= 2 ? "inherit" : current == 1 ? "#fff" : "inherit",
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                }}
                              ></span>
                               <div className="timeline-status" style={{ position: 'absolute', bottom:'-45px', width:'max-content', left:'-45px', textAlign:'center' }}>
                                <h5 style={{fontSize:'14px', color:'#000'}}>In Progress</h5>
                                <h6 style={{fontSize:'12px', color:'#9a9a9a'}}>July 6, 2014, 06:00</h6>
                              </div>
                            </div>
                            <div
                              style={{
                                height: "2px",
                                width: "33%",
                                backgroundColor: current >= 2 ? "#3f1bd0" : "#9a9a9a",
                              }}
                              className="progress-connector-line"
                            ></div>
                            <div
                              style={{
                                position:'relative',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: current >= 2 ? "#3f1bd0" : "#9a9a9a",
                                color: "#ffffff",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                border: "1px solid transparent",
                              }}
                            >
                              <span
                                style={{
                                  background: current >= 3 ? "inhertit" : current == 2 ?  "#fff" : 'inherit',
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                }}
                              ></span>
                               <div className="timeline-status" style={{ position: 'absolute', bottom:'-45px', width:'max-content', left:'-20px', textAlign:'center' }}>
                                <h5 style={{fontSize:'14px', color:'#000'}}>Shipped</h5>
                                <h6 style={{fontSize:'12px', color:'#9a9a9a'}}>-- --</h6>
                              </div>
                            </div>
                            <div
                              style={{
                                height: "2px",
                                width: "33%",
                                backgroundColor: current >= 3 ? "#3f1bd0" : "#9a9a9a",
                              }}
                              className="progress-connector-line"
                            ></div>
                            <div
                              style={{
                                position:'relative',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: current >= 3 ? "#3f1bd0" : "#9a9a9a",
                                color: "#ffffff",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                border: "1px solid transparent",
                              }}
                            >
                              <span
                                style={{
                                  background: current >= 3 ? "#fff" : "inherit",
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                }}
                              ></span>
                               <div className="timeline-status" style={{ position: 'absolute', bottom:'-45px', width:'max-content', right:0, textAlign:'right' }}>
                                <h5 style={{fontSize:'14px', color:'#000'}}>Delivered</h5>
                                <h6 style={{fontSize:'12px', color:'#9a9a9a'}}>-- --</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                            <span className='horizontal-line'></span>
                            <div className="address-container">
                              <div className="left-container">
                                <h4>Shipping Address</h4>
                                <div className="address">
                                  <div className="left-container">
                                    <h4>University of California, San Francisco</h4>
                                    <h4 style={{ color: '#6c6a73', fontWeight: 400 }}>505 Parnassus Ave, San Francisco, CA 94143, United States</h4>
                                  </div>                               
                                </div>
                              </div>
                              <div className="right-container">
                              <h4>Billing Address</h4>
                                <div className="address">
                                  <div className="left-container">
                                    <h4>University of California, San Francisco</h4>
                                    <h4 style={{ color: '#6c6a73', fontWeight: 400 }}>505 Parnassus Ave, San Francisco, CA 94143, United States</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="items-container">
                              <div className="item-header">
                                <h4>Items</h4>
                                <span><i className="fas fa-eye"></i> Invoice</span>
                              </div>
                              <div className="items-wrapper">
                                <div className="item">
                                  <h4>Mouse Anti-Human PAR, IgG1</h4>
                                  <div className="item-details">
                                    <div className="left-container">
                                      <div className="details">
                                      <h4 style={{color:'#9a9a9a'}}>Cat ID#</h4>
                                      <h4>PA000001</h4>
                                      </div>
                                      <div className="details">
                                      <h4 style={{color:'#9a9a9a'}}>Concentration</h4>
                                      <h4>10 mg/ml</h4>
                                      </div>
                                    </div>
                                    <div className="middle-container">
                                      <h4 style={{color:'#9a9a9a'}}>Q.ty</h4>
                                      <h4>2</h4>
                                    </div>
                                    <div className="right-container">
                                      <h4>$99.00</h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <h4>Mouse Anti-Human PAR, IgG1</h4>
                                  <div className="item-details">
                                    <div className="left-container">
                                      <div className="details">
                                      <h4 style={{color:'#9a9a9a'}}>Cat ID#</h4>
                                      <h4>PA000001</h4>
                                      </div>
                                      <div className="details">
                                      <h4 style={{color:'#9a9a9a'}}>Concentration</h4>
                                      <h4>10 mg/ml</h4>
                                      </div>
                                    </div>
                                    <div className="middle-container">
                                      <h4 style={{color:'#9a9a9a'}}>Q.ty</h4>
                                      <h4>2</h4>
                                    </div>
                                    <div className="right-container">
                                      <h4>$99.00</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="invoice-container">
                              <h4>Summary</h4>
                              <div className="summary">
                                <div className="summary-header">
                                  <h5>Payment Method</h5>
                                  <h5>Purchase Order</h5>
                                </div>
                                <span className="horizontal-line"></span>
                                <div className="summary-details">
                                  <div className="left-container">
                                    <h5>Total Items</h5>
                                    <h5>Subtotal</h5>
                                    <h5>Tax</h5>
                                    <h5>Shipping & Handling</h5>
                                    <h5 style={{color:'#000'}}>Grand Total</h5>
                                  </div>
                                  <div className="right-container" style={{textAlign:'right'}}>
                                    <h5>3</h5>
                                    <h5>$287.00</h5>
                                    <h5>$2.00</h5>
                                    <h5>$20.00</h5>
                                    <h5 style={{color:'#000', fontWeight:700}}>$309.00</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      }
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </ContentWrapper>
    </Layout>
  )
}

export default Index