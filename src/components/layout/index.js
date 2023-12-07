import React, {useContext, useEffect} from 'react'
import { AuthContext } from '../../context/auth'
import Sidebar from '../Sidebar'
import Notification from '../Notification'
import ChangePasswordModal from '../modals/changePasswordModal'

const Index = ({children}) => {
  const { notification, setNotification, openAddressModal, setOpenAddressModal } = useContext(AuthContext)


useEffect(() => {
  if(notification){
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }
}, notification)


  return (
    <>
  {notification && <Notification message={notification.message} subMessage={notification.subMessage} type={notification.type} onClick={() => setNotification(null)} /> }
  <div style={{width: '100%', display: 'flex'}}>
    <Sidebar />
    <main style={{height:'100vh', width:'100%', overflowY: 'hidden'}}>
    {children}
    </main>
  </div>
 {openAddressModal && <ChangePasswordModal openAddressModal={openAddressModal} setOpenAddressModal={setOpenAddressModal}/> }
    </>
  )
}

export default Index