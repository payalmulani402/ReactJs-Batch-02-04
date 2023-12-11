import { Link } from 'react-router-dom'
import './Nav.css'

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className='nav-link-item'>
                    <ul className='flex justify-around bg-purple-600 p-8'>
                        <li><Link className='underline text-white text-2xl' to="/">Home</Link></li>
                        <li><Link className='underline text-white text-2xl' to="/about">About</Link></li>
                        <li><Link className='underline text-white text-2xl' to="/product">Product</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
