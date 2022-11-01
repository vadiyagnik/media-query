import React from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from '../../shared/images';
import '../../assets/css/navbar/navbar.css';
import { useAuth } from '../../auth';

const Navbar = () => {
    const navLinkStyles = ({ isActive })=> {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }
    const auth = useAuth();
    return (
        <nav className='navBar'>
            <NavLink><Logo /></NavLink>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/Dashboard'>Dashboard</NavLink>
            <NavLink style={navLinkStyles} to='/Products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/About'>About</NavLink>
            <NavLink style={navLinkStyles} to='/Profile'>Profile</NavLink>
            {
                !auth.user ?
                <>
                    {
                        !auth.user && (
                            <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
                        )
                    }
                </>
                : ""
            }
            <NavLink><Logo /></NavLink>
        </nav>
    )
}

export default Navbar;