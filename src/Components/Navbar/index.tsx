import { Link } from "react-router-dom";
import { NavStyle } from "./style";
import { Dropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <NavStyle>
      <div className="container ">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/media">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Media
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="">Live Darshan</Dropdown.Item>
                  <Dropdown.Item href="">Daily Singar Darshan</Dropdown.Item>
                  <Dropdown.Item href="/media/audio">
                    Kirtan & Lecture
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Link>
          </div>
        </nav>
      </div>
    </NavStyle>
  );
};

export default NavigationBar;
