import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ width: '65%', margin: 'auto', borderRadius: '25px', marginTop: '20px', marginBottom: '20px' }} className=' bg-slate-400 p-3 text-white text-lg text-center'>
            <Link className='mr-6  hover:text-pink-200 duration-500 ease' to='/'>Home</Link>
            <Link className='mr-6  hover:text-pink-200 duration-500 ease' to='/reviews'>Reviews</Link>
            <Link className='mr-6  hover:text-pink-200 duration-500 ease' to='/dashboard'>Dashboard</Link>
            <Link className='mr-6  hover:text-pink-200 duration-500 ease' to='/blogs'>Blogs</Link>
            <Link className='mr-6  hover:text-pink-200 duration-500 ease' to='/about'>About</Link>
        </div>
    );
};

export default Header;