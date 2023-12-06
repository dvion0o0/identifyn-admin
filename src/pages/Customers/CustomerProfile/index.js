import React, {useState} from 'react'
import Layout from "../../../components/layout"
import { HeaderWrapper, ContentWrapper } from './style'
import Input from '../../../components/Input'
import { toAbsoluteUrl } from '../../../utils/assetHelper'


const Index = ({setOpenProfile}) => {
  const [addressTab, setAddressTab] = useState("shipping")
  const [ordersTab, setOrdersTab] = useState("current");

  const businessData = [
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
    {
      date:'July 6, 2014, 01:00',
      email:'user@useremail.com',
      account:'123456',
      order:'123456',
      total:'$198.00',
      status:1,
    },
  ];


  

  return (
    <Layout>
     <HeaderWrapper>
     <div className="header-title"><span style={{cursor:'pointer'}} onClick={() => setOpenProfile(false)}>Customers <i className='far fa-angle-right' style={{fontSize:'14px'}}></i></span> <span className='sub-title'>Profile Details</span></div>
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
      <button style={{borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px'}} className={addressTab === "shipping" && 'tab-active'} onClick={() => setAddressTab("shipping")}>Shipping Address</button>
      <button style={{borderTopRightRadius:'12px', borderBottomRightRadius:'12px'}} className={addressTab === "billing" && 'tab-active'} onClick={() => setAddressTab("billing")}>Billing Address</button>
      </div>
      <div className="address-wrapper">
        <div className="address">
          <div className="left-container">
            <h4>University of California, San Francisco</h4>
            <h4 style={{color:'#6c6a73', fontWeight:400}}>505 Parnassus Ave, San Francisco, CA 94143, United States</h4>
          </div>
          <span><i className="fas fa-eye"></i> View</span>
        </div>
        <div className="address">
          <div className="left-container">
            <h4>University of California, San Francisco</h4>
            <h4 style={{color:'#6c6a73', fontWeight:400}}>505 Parnassus Ave, San Francisco, CA 94143, United States</h4>
          </div>
          <span><i className="fas fa-eye"></i> View</span>
        </div>
        <div className="address">
          <div className="left-container">
            <h4>University of California, San Francisco</h4>
            <h4 style={{color:'#6c6a73', fontWeight:400}}>505 Parnassus Ave, San Francisco, CA 94143, United States</h4>
          </div>
          <span><i className="fas fa-eye"></i> View</span>
        </div>
      </div>
        </div>
      </div>
      <div className="order-details-container">
      <div className="tab-container">
      <button style={{borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px'}} className={ordersTab === "current" && 'tab-active'} onClick={() => setOrdersTab("current")}>Current Orders</button>
      <button style={{borderTopRightRadius:'12px', borderBottomRightRadius:'12px'}} className={ordersTab === "completed" && 'tab-active'} onClick={() => setOrdersTab("completed")}>Completed Orders</button>
      </div>
      <div className="table-container">
      <table className={"mainTable"}>
          <thead>
            <tr>
            <th>Date & Time </th>
              <th>Order Number</th>
              <th>Invoice Number</th>
              <th>Total</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {businessData.map((business) => {
              return (
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
                  <td>{business?.status ? business?.status : "-"}</td>
                  <td style={{ cursor: "pointer" }}>
                    <span style={{display:'flex', gap:'30px', alignItems:'center', justifyContent:'flex-end'}}>
                      <button style={{fontSize:'16px', color:'#6c6a43'}}><i class="far fa-eye"></i></button>
                    </span>
                  </td>
                </tr>
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