import Facebook from '../../static/images/facebook.svg';
import Google from '../../static/images/google.svg';
import Apple from '../../static/images/apple.svg';
import './index.css'


// component to render the google,apple and facebook login buttons
const SocialAuth = ({image,altName,width}) => {
    return <button className="socialBtn">
            <img src={image} alt={altName} width={width ? width: 30} />
         </button>
}


// Form component of the login page.
const LoginForm = () => {
    return <>
    {/* form which contains email and password */}
    <form style={{display:'flex',flexDirection:'column'}}>
        <input type="email"  placeholder="Email" className="input" required />
        <input type="password" placeholder="Password" className="input" required/>
        <button className="loginBtn" type="submit">Log In</button>

        <div style={{display:'flex',justifyContent:'space-between'}}>
        <p className="link">Sign Up</p>
        <p className="link">Forget Password ?</p>
        </div>
        
    </form>

    {/* normal helper text */}
    <div style={{display:'flex', marginTop:15}}>
        <hr className="hr" />
        <p>Or Login with</p>
        <hr className="hr" />
    </div>

    {/* displaying social auth buttons */}
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <SocialAuth image={Google} altName="google" />
        <SocialAuth image={Facebook} altName="facebook"  />
        <SocialAuth image={Apple} altName="apple" />
    </div>
</>
}

const LeftDiv = () => {
    return <div className="leftDiv">
        <div style={{width:'100%',maxWidth:350}}>
        <h1 className="h1" style={{fontSize:'4.5em'}}>Welcome</h1>
        <h1 className="h1" style={{marginTop:0,color:'#565964'}}> to Yoga.</h1>
        <p style={{fontFamily:'sans-serif',color:'#565964',marginTop:15}}>Be fit and healthy by using our product.</p>

        {/* LoginForm component to display the form */}
        <LoginForm />
        </div>
    </div>
}

export default LeftDiv