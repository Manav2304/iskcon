import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SuccessContainer,
  SuccessTitle,
  SuccessParagraph,
  DonationTable,
  TableRowForm,
  TableCellForm,
  ButtonForm,
} from "./style";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

type SuccessMessageProps = {
  paymentReferenceId: string;
  totalDonationAmount: number;
  selectedDonations: Donation[];
  name: string;
  donationPageName: string;
};

export const SuccessPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const successMessage = location.state as SuccessMessageProps | undefined;

  // Handle case where location.state is undefined
  if (!successMessage) {
    return (
      <SuccessContainer>
        <SuccessTitle>Error</SuccessTitle>
        <SuccessParagraph>
          We could not find your payment details. Please make sure your donation
          was successful, or contact support if you believe this is an error.
        </SuccessParagraph>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </SuccessContainer>
    );
  }

  return (
    <SuccessContainer>
      <SuccessTitle>Payment Successful!</SuccessTitle>
      <DonationTable>
        <tbody>
          <TableRowForm>
            <TableCellForm>Customer Name</TableCellForm>
            <TableCellForm>{successMessage.name}</TableCellForm>
          </TableRowForm>
          <TableRowForm>
            <TableCellForm>Total Donation Amount</TableCellForm>
            <TableCellForm>{successMessage.totalDonationAmount}</TableCellForm>
          </TableRowForm>
          <TableRowForm>
            <TableCellForm>Payment Reference ID</TableCellForm>
            <TableCellForm>{successMessage.paymentReferenceId}</TableCellForm>
          </TableRowForm>
          <TableRowForm>
            <TableCellForm>
              <b>Selected Donations</b>
            </TableCellForm>
            {successMessage.selectedDonations.length > 0 ? (
              successMessage.selectedDonations.map((donation, index) => (
                <TableCellForm>{donation.title}</TableCellForm>
              ))
            ) : (
              <TableCellForm colSpan={2}>
                Donation for - {successMessage.donationPageName}
              </TableCellForm>
            )}
          </TableRowForm>
        </tbody>
      </DonationTable>
      <ButtonForm onClick={() => navigate("/")}>Go to Home</ButtonForm>
    </SuccessContainer>
  );
};
