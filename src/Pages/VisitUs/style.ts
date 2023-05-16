import styled from "styled-components";
import { devices } from "../../style";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;
`;

export const ImageSlide = styled.img`
  width: 600px;
  height: 600px;
  object-fit: auto;
  margin-bottom: 20px;
  border-radius: 5px;

  @media (${devices.mobileES}) {
    width: 100%;
    height: auto;
  }

  @media (${devices.mobileS}) {
    width: 100%;
    height: auto;
  }

  @media (${devices.mobileM}) {
    width: 100%;
    height: auto;
  }

  @media (${devices.mobileL}) {
    width: 100%;
    height: auto;
  }

  @media (${devices.tablet}) {
    width: 100%;
    height: auto;
  }

  @media (${devices.laptop}) {
    width: 80%;
    }

  @media (${devices.laptopL}) {
    width: 80%;
    }

  @media (${devices.desktop}) {
    width: 80%; 
   }
`;

export const Paragraph = styled.p`
  text-align: justify;
  margin: 40px 50px 50px;
  color: #ad0d0d;
  font-family: "Times New Roman", Times, serif;

  @media (${devices.mobileES}) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media (${devices.mobileS}) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media (${devices.mobileM}) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media (${devices.mobileL}) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media (${devices.tablet}) {
    margin: 20px;
    font-size: 0.8rem;
  }

  @media (${devices.laptop}) {
    margin: 25px;
    font-size: 1rem;
  }

  @media (${devices.laptopL}) {
    font-size: 1.2rem;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (${devices.desktop}) {
    font-size: 1.2rem;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const HiddenParagraph = styled.p`
  display: none;
`;

export const VisibleParagraph = styled.p`
  display: block;
`;
