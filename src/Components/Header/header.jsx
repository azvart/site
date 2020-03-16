import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='row text-center'>
            <div className='col-lg-6'>
                <nav className="navbar navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        Home
                    </Link>
                </nav>
            </div>
            <div className='col-lg-6 text-center align-center'>
                <ul className='nav'>
                    <li className='nav-link'>
                        <Link to='home' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='contacts' className='nav-link'>Contacts</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='faq' className='nav-link'>FAQ</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='records' className='nav-link'>Records</Link>
                    </li>
                </ul>
            </div> 
        </div>
    )
}


export default Header;