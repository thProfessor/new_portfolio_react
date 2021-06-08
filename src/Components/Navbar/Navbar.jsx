import React, {useState} from 'react';
import './Navbar.css';
import logo from '../../images/logo_final.png';
import { VscFoldDown } from "react-icons/vsc";

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
                <li><a href='/' data-text='Home'>Home</a></li>
                <li><a href='/about' data-text='About'>About</a></li>
                <li><a href='/projects' data-text='Projects'>Projects</a></li>
                <li><a href='/contact' data-text='Contact'>Contact</a></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar
