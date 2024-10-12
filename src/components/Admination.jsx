import './Admination.scss';
import logo from '../logo.svg'
function Admination(){
    return(
        <div className="container" tabIndex="0">

  <div className="photo" style={{backgroundImage: logo}}>
  </div>

  <div className="instructions">Click to take picture</div>

  <div className="shutter" style={{'--flaps': '6'}}>
    <div className="flap" style={{'--i': '1'}}></div>
    <div className="flap" style={{'--i': '2'}}></div>
    <div className="flap" style={{'--i': '3'}}></div>
    <div className="flap" style={{'--i': '4'}}></div>
    <div className="flap" style={{'--i': '5'}}></div>

  </div>

</div>
    )
}
export default Admination