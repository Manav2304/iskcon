import { NavStyle, StyledLink, ImgStyle } from "./style";
import { DropDown } from "../Dropdown";
import { donationInfo, mediaInfo, socialMediaIcon } from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/isckon-logo.png";
import { servicesInfo, dropdownItems, festivanInfo } from "./constant";

export const NavigationBar = () => {
  return (
    <NavStyle>
      <nav className="navbar">
        <div className="container">
          <DropDown items={dropdownItems} toggleTitle="ISKCON" />
          <DropDown items={festivanInfo} toggleTitle="Festival" />
          <DropDown items={servicesInfo} toggleTitle="Services" />
          <StyledLink to="/">
            <ImgStyle src={logoUrl} alt="Logo" />
          </StyledLink>
          <DropDown items={mediaInfo} toggleTitle="media" />
          <StyledLink to="/contact">Contact</StyledLink>
          <DropDown items={donationInfo} toggleTitle="Donate" />
          <div>
            {socialMediaIcon.map((item) => (
              <a key={item.name} href={item.href}>
                <MDBIcon fab icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </NavStyle>
  );
};
