import { useEffect, useRef, useState } from "react";
import {
  HeadingStyle,
  IconsStyle,
  ImgStyle,
  LogoWrapper,
  NavStyle,
  PageWrapper,
  SidebarStyle,
  ToggleButton,
} from "./style";
import { SocialMediaIconsStyle } from "../Navbar/style";
import { socialMediaIcon } from "../Navbar/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import logoUrl from "../../assets/images/isckon-logo.png";
import { routes } from "../../routes";
import { StyledLink } from "./style";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";
import { dropdownDonationInfo, dropdownServicesInfo } from "./constant";
import { SidebarAccordion } from "./SidebarAccordion";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsDonationOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      !(ref.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const toggleTitle = <Link to={routes.donationMainPage}>Donation</Link>;

  return (
    <div ref={ref}>
      <Navbar />
      <NavStyle>
        <PageWrapper>
          <LogoWrapper>
            <StyledLink to={routes.home}>
              <ImgStyle src={logoUrl} alt="Logo" />
            </StyledLink>
            <HeadingStyle>Sri Sri Radha Giridhariji Temple</HeadingStyle>
          </LogoWrapper>
          <ToggleButton onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </ToggleButton>
        </PageWrapper>
        <SidebarStyle isOpen={isOpen}>
          <nav>
            <StyledLink to={routes.home} onClick={handleClose}>
              ISKCON
            </StyledLink>
            <hr />
            <SidebarAccordion
              items={dropdownServicesInfo}
              toggleTitle="Services"
              handleClose={handleClose}
              isOpen={isServicesOpen}
              setIsOpen={setIsServicesOpen}
            />
            <hr />
            <StyledLink to={routes.visitUs} onClick={handleClose}>
              Visit Us
            </StyledLink>
            <hr />
            <StyledLink to={routes.media} onClick={handleClose}>
              Media
            </StyledLink>
            <hr />
            <SidebarAccordion
              items={dropdownDonationInfo}
              toggleTitle={toggleTitle.props.children}
              handleClose={handleClose}
              isOpen={isDonationOpen}
              setIsOpen={setIsDonationOpen}
            />
            <hr />
            <StyledLink to={routes.festival} onClick={handleClose}>
              Festival
            </StyledLink>
            <hr />
            <StyledLink to={routes.contact} onClick={handleClose}>
              Contact
            </StyledLink>
            <hr />
            <SocialMediaIconsStyle>
              {socialMediaIcon.map((item) => (
                <IconsStyle key={item.name} href={item.href} target="_blank">
                  <MDBIcon fab icon={item.icon} />
                </IconsStyle>
              ))}
            </SocialMediaIconsStyle>
          </nav>
        </SidebarStyle>
      </NavStyle>
    </div>
  );
};
