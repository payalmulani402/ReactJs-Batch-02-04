import {  NavLink } from 'react-router-dom'
import './Nav.css'

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className='nav-link-item'>
                    <ul className='flex justify-around bg-purple-600 p-8'>
                        <li><NavLink className='underline text-white text-2xl hover:text-red-600'  to="/">Home</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl  hover:text-red-600' to="/about">About</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl  hover:text-red-600' to="/product">Product</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl hover:text-red-600' to="user/mark">Mark Page</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl hover:text-red-600' to="user/anil">Anil Page</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
