import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from './context/auth'
function App() {
const {pathname} = useLocation()

  useEffect(() => {
    document.body.className = ''
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
}, [pathname])

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
