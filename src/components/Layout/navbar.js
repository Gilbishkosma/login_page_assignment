import Logo from '../../static/images/yoga.svg'
import './index.css'


// In navbar only the logo image is present
const Navbar = () => {
    return <div className="navbar">
    <img src={Logo} alt="logo" height="30"  />
    </div>
}

export default Navbar