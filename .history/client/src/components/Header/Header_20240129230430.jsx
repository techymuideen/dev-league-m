import './Header.css'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'

const Header = ({ onLogin }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
      const handleLogin = () => {
    // Simulate a login action
    setIsLoggedIn(true);
  };
  return (
    {isLogin ? <Navbar isLogin={} /> : <SideNavbar />}
  )
}

export default Header
