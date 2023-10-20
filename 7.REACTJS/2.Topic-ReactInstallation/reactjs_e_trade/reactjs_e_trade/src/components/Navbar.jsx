import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/home_assets/logo.png";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-full">
            <div className="flex">
              <NavDropdown title="English" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Arabic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Spanish</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="USD" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">USD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">AUD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">EUR</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="flex ms-auto">
              <Nav.Link href="#link">Help</Nav.Link>
              <Nav.Link href="#link">Join Us</Nav.Link>
              <Nav.Link href="#link">Sign In</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar expand="lg" className="bg-white rounded-xl">
        <Container className="px-10 py-2">
          <Navbar.Brand href="#home">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">
                <Link to="/Home">Home</Link>
              </Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
