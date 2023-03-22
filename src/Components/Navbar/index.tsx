import React from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./style";
import logo from "../../assets/isckonlogo.png";
import { socialmediaIcon } from "../../Components/Footer/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import { DropDown } from "./Dropdown/index";
import { Image } from "./style";

const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container">
          <DropDown />
          <Link to="#">GO Seva</Link>
          <Link to="#">Festival</Link>
          <Link to="#">Services</Link>
          <Image>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Image>
          <Link to="#">Conatact</Link>
          <Link to="#">Media</Link>
          <Link to="/donation">Donation</Link>
          <div>
            {socialmediaIcon.map((item) => (
              <a key={item.name} href={item.href} className="me-4 text-reset">
                <MDBIcon fab icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </NavStyle>
  );
};

export default NavigationBar;
