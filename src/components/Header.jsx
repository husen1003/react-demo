import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='bg-cyan-300 py-3 px-2 flex'>
                <div className='mr-2'>
                    <Link to={'/'}>Home</Link>
                </div>
                <div>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
