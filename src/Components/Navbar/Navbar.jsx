import React, {useState} from 'react';
import './Navbar.css';
import logo from '../../images/logo_final.png';
import { VscFoldDown } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Navbar() {
    const [show,setShow] = useState(false);
    return (
        <>
        <div className='navbar__container container-fluid'>
            <div className='navbar__content'>
                <img className='navbar__logo' src={logo} alt='logo'/>
              <div onClick={()=>setShow(!show)}>
                <VscFoldDown className='menu' />
                </div>
            </div>
        </div>

        <div className={`menu__t ${show?'menu__overlay':'hidden'} container-fluid`}>
            <ul>
                <li><Link to='/' onClick={()=>setShow(!show)} data-text='Home'>Home</Link></li>
                <li><Link to='/about' onClick={()=>setShow(!show)} data-text='About'>About</Link></li>
                <li><Link to='/projects' onClick={()=>setShow(!show)} data-text='Projects'>Projects</Link></li>
                <li><Link to='/contact' onClick={()=>setShow(!show)} data-text='Contact'>Contact</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar
