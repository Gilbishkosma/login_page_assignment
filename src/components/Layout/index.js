import Navbar from "./navbar";
import './index.css'



const Layout = ({children}) => {
    return <div className="layout">
    <div className="navbarContainer">
    <Navbar />    
    </div>
    {children}
    </div>
}

export default Layout