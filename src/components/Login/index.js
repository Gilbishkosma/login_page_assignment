import LeftDiv from './leftDiv';
import RightDiv from './rightDiv';
import './index.css'


// LeftDiv is for the login form
// RightDiv is for the image which is present in right side of screen. RightDiv is hidden in small screens
const Login = () => {
    return <div className="loginLayout">
        <LeftDiv />
        <RightDiv />
    </div>
}


export default Login