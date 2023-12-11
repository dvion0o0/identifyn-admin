import React, {useState, useContext} from 'react'
import Layout from "../../../components/layout"
import { HeaderWrapper, ContentWrapper } from './style'
import Input from '../../../components/Input'
import { AuthContext } from '../../../context/auth';
import ItemPreviewDrawer  from '../../../components/Drawers/ItemPreviewDrawer';
import Pagination from '../../../components/pagination';
const Index = () => {
  const {setOpenItemPreviewModal, openItemPreviewModal } =useContext(AuthContext)
  const [openAddProduct, setOpenAddProduct] = useState(false)

  const businessData = [
    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },
    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },
    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },

    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },

    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },

    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },

    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },

    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },

    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },

    {

      cat: "PA000001",
      host_species: "Mouse Monoclonal",
      price: "$99.99",
      target: "PARP1",
      product_name: "Anti-Human PARP1",
    },


  ];







  return (
    <>
    <Layout>
     <HeaderWrapper>
     <div className="header-title">Products - <span className='sub-title'>Mounting Medium</span> 234</div>
     <div className="header-search-container">
      <Input type="text" search style={{height:'40px', paddingLeft:'30px'}} placeholder={'Search'} />
      <button className='btn'>Add New Product</button>
     </div>
     </HeaderWrapper>
     <ContentWrapper>
     <table className={"mainTable"}>
          <thead>
            <tr>
              <th>Cat # </th>
              <th>Product Name <i className='fas fa-chevron-down' style={{fontSize:'11px', color:'#6c6a73'}}></i></th>
              <th>Application <i className='fas fa-chevron-down' style={{fontSize:'11px', color:'#6c6a73'}}></i></th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {businessData.map((business) => {
              return (
                <tr
                  key={business?.cat}
                >
                  <td>
                   {business?.cat ? business?.cat : "-"}
                  </td>
                  <td>
                      {business?.mounting ? business?.mounting : "Mounting Medium"}
                  </td>
                  <td>
                      {business?.application ? business?.application : "Application"}
                  </td>
                  <td><span style={{fontWeight:600}}>{business?.price ? business?.price : "-"}</span></td>
                  <td style={{ cursor: "pointer" }}>
                    <span style={{display:'flex', gap:'30px', alignItems:'center', justifyContent:'flex-end'}}>
                      <button style={{fontSize:'16px', color:'#6c6a43'}} onClick={() => setOpenItemPreviewModal(true)}><i class="far fa-eye"></i></button>
                      <button style={{fontSize:'16px', color:'#6c6a43'}}><i class="far fa-pencil"></i></button>
                      <button style={{fontSize:'16px', color:'#6c6a43'}}><i class="far fa-trash-alt"></i></button>
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
    {/* {openItemPreviewModal &&  <ItemPreviewDrawer setOpenItemPreviewModal={setOpenItemPreviewModal} setOpenAddProduct={setOpenAddProduct} />} */}
    </>
     )
}

export default Index