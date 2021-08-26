import Meditation from '../../static/images/meditation2.svg'
import './index.css'


// RightDiv contains a beautiful yoga image
const RightDiv = () => {
    return <div className="rightDiv">
        <img src={Meditation} alt="meditation" style={{width:'100%',maxWidth:800}}  />
    </div>
}

export default RightDiv