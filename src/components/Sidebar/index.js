import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/auth'
import { SidebarContainer } from './style'
import { toAbsoluteUrl } from '../../utils/assetHelper'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'


const Index = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const { logout } = useContext(AuthContext)
    const [openSidebar, setOpenSidebar] = useState(true)
    const [openDropDown, setOpenDropDown] = useState(true)

    useEffect(() => {
        if(openSidebar){
            setOpenDropDown(true)
        }else{
            setOpenDropDown(false)
        }
    },[openSidebar])


    return (
        <SidebarContainer style={{width: openSidebar ? '300px' : '90px'}}>       
            <span className='close-sidebar' onClick={() => setOpenSidebar(!openSidebar)}>
           {openSidebar ? <i class="fas fa-chevron-left"></i> : <i class="fas fa-chevron-right"></i>}
            </span>
            <div className="links-wrapper">
              {openSidebar ? <img src={toAbsoluteUrl('/media/Logo with Text.png')} className='logo' alt="" /> : 
              <img src={toAbsoluteUrl('/media/sidebarlogo.png')} className='sidebar-logo' alt="" />
              }
                <div className="links">
                    <button  className={'link'} style={{color: pathname.includes('products') && 'var(--primary-color)', fontWeight: pathname.includes('products') && '700', background: !openSidebar && '#fff2e5', borderRadius: !openSidebar && '12px', justifyContent: !openSidebar && 'center'}} onClick={() => openSidebar ? setOpenDropDown(!openDropDown) : navigate('/products/primary-antibodies')}><i class="far fa-boxes"></i>{openSidebar && `Products`} {openSidebar && openDropDown ? <i class="fas fa-angle-down angle"></i> : openSidebar && <i class="fas fa-angle-up angle"></i>}</button>
             <div className={`sub-link ${openDropDown && 'sub-link-active'}`}>
                        <NavLink to="/products/primary-antibodies" className={'link'}>Primary Antibodies</NavLink>
                        <NavLink to="/products/alexa-fluor-primary" className={'link'}>Alexa Fluor™
                            Primary Antibodies</NavLink>
                        <NavLink to="/products/alexa-fluor-secondary" className={'link'}>Alexa Fluor™
                            Secondary Antibodies</NavLink>
                        <NavLink to="/products/buffer" className={'link'}>Buffers</NavLink>
                        <NavLink to="/products/glass" className={'link'}>Glass</NavLink>
                        <NavLink to="/products/mounting" className={'link'}>Mounting Medium</NavLink>
                    </div>
                    <NavLink to="/customers" className={'link'} style={{justifyContent: !openSidebar && 'center'}}><i class="far fa-users"></i> {openSidebar && `Customers`}</NavLink>
                    <NavLink to="/order-history" className={'link'} style={{justifyContent: !openSidebar && 'center'}}><i class="far fa-clipboard-check"></i>{openSidebar && `Order History`}</NavLink>
                    <NavLink to="/team-bio" className={'link'} style={{justifyContent: !openSidebar && 'center'}}><i class="far fa-user-md"></i>{openSidebar && `Team Bios`}</NavLink>
                </div>
            </div>
            <div className="profile-wrapper">
                <div className="profile" style={{justifyContent: !openSidebar && 'center'}}><span>S</span>{openSidebar && 'Sheldon Copper'}</div>
                <button className='profile' style={{ color: '#DC1E00', fontWeight: '500', fontSize: '14px', justifyContent: !openSidebar && 'center'}}
                    onClick={logout}
                >
                    <i class="fas fa-sign-out-alt" style={{ fontSize: '22px' }}></i> {openSidebar && 'Logout'}
                </button>
            </div>
        </SidebarContainer>
    )
}

export default Index