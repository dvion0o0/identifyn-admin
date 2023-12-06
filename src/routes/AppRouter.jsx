import { Route, Routes} from 'react-router-dom'
import {ProtectedRoute} from './ProtectedRoute'
import SignIn  from '../pages/SignIn'
import PrimaryAntibodies from '../pages/Products/PrimaryAntibodies'
import AlexaFlourPrimary from '../pages/Products/AlexaFlourPrimary'
import AlexaFlourSecondary from '../pages/Products/AlexaFlourSecondary'
import Buffer from '../pages/Products/Buffer'
import Glass from '../pages/Products/Glass'
import MountingMedium from '../pages/Products/Mounting'
import Customers from '../pages/Customers'
import OrderHistory from '../pages/OrderHistory'
import AddProduct from '../pages/Products/AddProduct'

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path='/products/primary-antibodies' element={<PrimaryAntibodies/>}/>
                    <Route path='/products/alexa-fluor-primary' element={<AlexaFlourPrimary/>}/>
                    <Route path='/products/alexa-fluor-secondary' element={<AlexaFlourSecondary/>}/>
                    <Route path='/products/buffer' element={<Buffer/>}/>
                    <Route path='/products/glass' element={<Glass/>}/>
                    <Route path='/products/mounting' element={<MountingMedium/>}/>
                    <Route path='/customers' element={<Customers/>}/>
                    <Route path='/order-history' element={<OrderHistory/>}/>
                    <Route path='/team-bio' element={<PrimaryAntibodies/>}/>
                    {/* <Route path='/products/add-product' element={<AddProduct/>}/> */}
                </Route>
            </Routes>
        </>
    )
}
