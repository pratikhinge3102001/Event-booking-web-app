import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Navbar1=()=>{
    const myState = useSelector(state => state.logged)
    return(
        <div>
            <ul className='nav navbar'>
                <li></li>
                <li className="nav-item">
          
            Wellcome Admin !
        
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className="nav-item">
                <Link to='/revoke' className='nav-link' id='link' style={{fontSize:"small"}}>Deactive Attendee And Organiser Account </Link>
                </li>
                <li className="nav-item">
                <Link to='/viewEvent' className='nav-link' id='link' style={{fontSize:"small"}}>View All Events </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/logout' className='nav-link' id='link'>logout</Link>
                </li>
            </ul>
            
        </div>
        

        
    )
}

export default Navbar1 ;