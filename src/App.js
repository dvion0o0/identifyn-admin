import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from './context/auth'
import Error from './pages/NotSupported'
function App() {
const {pathname} = useLocation()
const [width, setWidth] = useState(window.innerWidth);

const updateWindowDimensions = () => {
  const newWidth = window.innerWidth;
  setWidth(newWidth);
};


  useEffect(() => {
    document.body.className = ''
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
}, [pathname])



useEffect(() => {
  window.addEventListener('resize', updateWindowDimensions);
}, []);

  return (
    <AuthProvider>
       {isMobileScreen(width) ? (
          <Error />
        ) : (
          <AppRouter />
        )}
    </AuthProvider>
  );
}

export default App;


export const isMobileScreen = (width) => {
  const maxWidthForMobileScreen = 1200;
  return width < maxWidthForMobileScreen;
};