import { Link } from "react-router-dom"


const Blog=()=>{
    return(
        <div>
          <ul className='nav navbar' style={{backgroundColor:"black"}}>
                <li className='nav-item'>
                    <Link to='/profile' className='nav-link' id='link'>profile</Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className="nav-item">
                <Link to='/blog' className='nav-link' id='link' style={{fontSize:"small"}}>blog</Link> 
                </li>
                <li className="nav-item">
                <Link to='/about' className='nav-link' id='link' style={{fontSize:"small"}}>about</Link>
                </li>
                <li className="nav-item">
                <Link to='/contact' className='nav-link' id='link' style={{fontSize:"small"}}>contact us</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/logout' className='nav-link' id='link'>logout</Link>
                </li>
            </ul>
      <h1>These are Blogs </h1>
    </div>
    )
}

const About=()=>{
  return(
    <div>
      <ul className='nav navbar' style={{backgroundColor:"black"}}>
                <li className='nav-item'>
                    <Link to='/profile' className='nav-link' id='link'>profile</Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className="nav-item">
                <Link to='/blog' className='nav-link' id='link' style={{fontSize:"small"}}>blog</Link> 
                </li>
                <li className="nav-item">
                <Link to='/about' className='nav-link' id='link' style={{fontSize:"small"}}>about</Link>
                </li>
                <li className="nav-item">
                <Link to='/contact' className='nav-link' id='link' style={{fontSize:"small"}}>contact us</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/logout' className='nav-link' id='link'>logout</Link>
                </li>
            </ul>
  <h1>These are Abouts </h1>
</div>
)

}

const Contact=()=>{
  const email = 'contact@example.com';
  const phoneNumber = '+1 (555) 123-4567';
  return(
    <div>
      <ul className='nav navbar' style={{backgroundColor:"black"}}>
                <li className='nav-item'>
                    <Link to='/profile' className='nav-link' id='link'>profile</Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className="nav-item">
                <Link to='/blog' className='nav-link' id='link' style={{fontSize:"small"}}>blog</Link> 
                </li>
                <li className="nav-item">
                <Link to='/about' className='nav-link' id='link' style={{fontSize:"small"}}>about</Link>
                </li>
                <li className="nav-item">
                <Link to='/contact' className='nav-link' id='link' style={{fontSize:"small"}}>contact us</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/logout' className='nav-link' id='link'>logout</Link>
                </li>
            </ul>
            <div>
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us if you have any questions or concerns.
        You can contact us via email or phone.
      </p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
    </div>
</div>
)

}



export {Blog, About, Contact};