
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: transparent;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background: transparent;
`;

export const DonationHeader = styled.th`
  font-weight: bold;
  font-size: 2rem;
  text-align: left;
  padding: 10px;
  border-bottom: 0.3rem solid #a0522d;
`;

export const TableHeader = styled.th`
  font-weight: bold;
  text-align: left;
  padding: 10px;
  border-bottom: 0.3rem solid #a0522d;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: transparent;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  color: #a52a2a;
  border-bottom: 0.19rem solid #8b0000;
  background: transparent;
`;

export const Button = styled.button`
  background-color: #800000;
  color: #f5deb3;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #07f;
  }
`;

export const NameInput = styled.form`
  color: #a52a2a;
`;

export const PhoneInput = styled.form`
  color: #a52a2a;
`;

export const EmailInput = styled.form`
  color: #a52a2a;
`;
export const Container1 = styled.div`
  margin-top: 100px;
  text-align: center;
`;
