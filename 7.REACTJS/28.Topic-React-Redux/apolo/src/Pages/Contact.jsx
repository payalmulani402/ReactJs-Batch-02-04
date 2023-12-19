import { Link, Outlet} from "react-router-dom"
import Navbar from "../Components/Navbar"
const Contact = () => {
     return (
          <div>
               <Navbar />
               <h1 className="text-5xl">This is Contact Page</h1>
               <Link className="link" to="company">Company Data</Link>
               <Link className="link" to="channel">Channel Data</Link>
               <Link className="link" to="other">Other Data</Link>
               <Outlet></Outlet>
          </div>
     )
}

export default Contact
