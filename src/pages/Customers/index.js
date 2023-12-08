import React, {useState} from 'react'
import Layout from "../../components/layout"
import { HeaderWrapper, ContentWrapper } from './style'
import Input from '../../components/Input'
import CustomerProfile from './CustomerProfile'
import Pagination from '../../components/pagination';


const Index = () => {
  const [tab, setTab] = useState("Industry")
  const [openProfile, setOpenProfile] = useState(false)

  const businessData = [
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    },
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    },
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    },
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    },
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    },
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    },
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    },
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    },
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    },
    {
      name:'Betty King',
      email:'bettyking@gmail.com',
      position:'Position Name',
      address:"132, My Street, Kingston, New York 12401.",
      counrty:"USA",
      industry:"Industry Name",
      academic:"Academic Name",
    }

  ];

  if(openProfile){
    return <CustomerProfile setOpenProfile={setOpenProfile} />
  }

  return (
    <Layout>
     <HeaderWrapper>
     <div className="header-title"><span className='sub-title'>Customers</span> 431</div>
     <div className="header-search-container">
      <Input type="text" search style={{height:'40px', paddingLeft:'30px'}} placeholder={'Search'} />
      <div className="tab-container">
      <button style={{borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px'}} className={tab === "Industry" && 'tab-active'} onClick={() => setTab("Industry")}>Industry</button>
      <button style={{borderTopRightRadius:'12px', borderBottomRightRadius:'12px'}} className={tab === "Academic" && 'tab-active'} onClick={() => setTab("Academic")}>Academic</button>
      </div>
     </div>
     </HeaderWrapper>
     <ContentWrapper>
     <table className={"mainTable"}>
          <thead>
            <tr>
            <th>Name </th>
              <th>Email</th>
              <th>Position</th>
              <th>Address</th>
              <th>Country</th>
              <th>{tab}</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {businessData.map((business) => {
              return (
                <tr
                  key={business?.name}
                >
                  <td>
                   {business?.name ? business?.name : "-"}
                  </td>
                  <td>
                    {business?.email ? business?.email : "-"}
                  </td>
                  <td>
                      {business?.position ? business?.position : "-"}
                  </td>
                  <td>
                      {business?.address ? business?.address : "-"}
                  </td>
                  <td>
                      {business?.counrty ? business?.counrty : "-"}
                  </td>
                  <td>{tab === 'Industry' ? business?.industry ? business?.industry : "-" : business?.academic ? business?.academic : "-"}</td>
                  <td style={{ cursor: "pointer" }}>
                    <span style={{display:'flex', gap:'30px', alignItems:'center', justifyContent:'flex-end'}}>
                      <button style={{fontSize:'16px', color:'#6c6a43'}} onClick={() => setOpenProfile(true)}><i class="far fa-eye"></i></button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination />
     </ContentWrapper>
    </Layout>
     )
}

export default Index