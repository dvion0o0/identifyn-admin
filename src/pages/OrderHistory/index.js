import React, {useState} from 'react'
import Layout from "../../components/layout"
import { HeaderWrapper, ContentWrapper } from './style'
import Input from '../../components/Input'


const Index = () => {
  const [tab, setTab] = useState("Current")

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
     <div className="header-title"><span className='sub-title'>{tab === 'Current' ? "Current Orders" : "Completed Orders"}</span> 1,654</div>
     <div className="header-search-container">
      <Input type="text" search style={{height:'40px', paddingLeft:'30px'}} placeholder={'Search'} />
      <div className="tab-container">
      <button style={{borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px'}} className={tab === "Current" && 'tab-active'} onClick={() => setTab("Current")}>Current</button>
      <button style={{borderTopRightRadius:'12px', borderBottomRightRadius:'12px'}} className={tab === "Completed" && 'tab-active'} onClick={() => setTab("Completed")}>Completed</button>
      </div>
     </div>
     </HeaderWrapper>
     <ContentWrapper>
     <table className={"mainTable"}>
          <thead>
            <tr>
            <th>Date & Time </th>
              <th>Email</th>
              <th>Account Number</th>
              <th>Order Number</th>
              <th>Total</th>
              <th>status</th>
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
                    {business?.email ? business?.email : "-"}
                  </td>
                  <td style={{color:'var(--primary-color)'}}>
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
     </ContentWrapper>
    </Layout>
     )
}

export default Index