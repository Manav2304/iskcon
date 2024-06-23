import styled from "styled-components";
import { devices } from "../../../style";

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  max-width: 600px;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #ad0d0d;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ffb3b3;
    transform: scale(1.05);
  }

  &.clicked {
    opacity: 0.5;
    background-color: #8c0c0c;
    cursor: not-allowed;
  }
`;

export const DonationformTitle = styled.div`
  margin-left: 38px;
  margin-top: -32px;
  text-align: center;
  font-size: 21px;
  font-weight: bold;
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  flex: 1;
  min-width: calc(50% - 10px);

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const FormHeading = styled.div`
  color: #ad0d0d;
`;

export const ImageTitle = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;

  @media (${devices.mobileES}) {
    width: 60%;
    margin-bottom: 15px;
  }

  @media (${devices.mobileS}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.mobileM}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.mobileL}) {
    width: 60%;
    margin-bottom: 30px;
  }

  @media (${devices.tablet}) {
    width: 40%;
    margin-bottom: 30px;
  }

  @media (${devices.laptop}) {
    width: 40%;
    margin-bottom: 30px;
  }

  @media (${devices.laptopL}) {
    margin-bottom: 30px;
    width: 35%;
  }

  @media (${devices.desktop}) {
    width: 20%;
    margin-bottom: 30px;
  }
`;
