import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/user';

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        logout().then(navigate('/'));
	};
  return (
    <div className="w-full p-6 flex justify-end relative">
        <button className="bg-red-600 p-2 rounded-md h-10 absolute bottom-64" onClick={handleClick}>
            Logout
        </button>
    </div>
  )
}

export default Navbar