import { NavLink } from 'react-router-dom'
import './Nav.css'

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className='nav-link-item'>
                    <ul className='flex justify-around bg-purple-600 p-8'>
                        <li><NavLink className='underline text-white text-2xl' to="/">Home</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl' to="/about">About</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl' to="/product">Product</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl' to="/filter">Filter</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl' to="/contact">Contact</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl' to="/login">Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
