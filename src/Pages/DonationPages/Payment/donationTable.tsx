import React, { useState } from "react";
import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  DonationHeader,
  Wrapper,
  Input,
  CardStyle,
  CardContentStyle,
  TypoGraphyMain,
  PageWrapper,
  TableWrapper,
  TypoGraphy,
  BarcodeImgStyle,
  DonateButton1,
  LabelWrapper,
  Input1,
  LabelWrapper1,
  Labelstyle,
  Span,
  Span1,
  Span2,
  DonateButton,
} from "./style";
import {
  DonationCategory,
  iciciBankAccountInfo,
  maintitle,
  subtitle2,
  subtitle1,
  yesBankAccountInfo,
} from "./constant";
import BarCode from "../../../assets/images/barcode.png";
import { BankInfo } from "./CopiedTableRow";
import { DonationForm } from "./DonationForm";

type Donation = {
  id: number;
  title: string;
  amount: number;
};

type PaymentProps = {
  donationCategories: DonationCategory[];
  donationPageName: string;
};

export const Payment: React.FC<PaymentProps> = ({
  donationCategories,
  donationPageName,
}) => {
  const [selectedDonations, setSelectedDonations] = useState<Donation[]>([]);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [isDonationFormVisible, setIsDonationFormVisible] = useState(false);

  const handleDonationSelect = (donation: Donation) => {
    const existingDonation = selectedDonations.find(
      (d) => d.id === donation.id,
    );

    if (existingDonation) {
      setSelectedDonations((prevState) =>
        prevState.filter((d) => d.id !== donation.id),
      );
    } else {
      setSelectedDonations((prevState) => [...prevState, donation]);
    }
  };

  const totalDonationAmount = selectedDonations.reduce(
    (acc, curr) => acc + curr.amount,
    customAmount,
  );

  const handleCloseForm = () => {
    setIsDonationFormVisible(false);
  };

  const handleSubmitDonationForm = (formData: any) => {
    console.log("Form Data:", formData);
  };

  const formatAmountInINR = (amount: number | bigint) => {
    const formattedAmount = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

    return formattedAmount.replace(/\.00$/, "");
  };

  const handleDonateButtonClick = () => {
    setIsDonationFormVisible(true);
    if (totalDonationAmount < 20) {
      alert("The donation amount must be more than 20.");
      setIsDonationFormVisible(false);
    } else {
      setIsDonationFormVisible(true);
      console.log("Donation processed:", totalDonationAmount);
    }
  };

  React.useEffect(() => {
    console.log(
      "Selected Donations:",
      selectedDonations.map((donation) => donation.title),
    );
  }, [selectedDonations]);

  return (
    <>
      <Wrapper>
        <Container>
          <form>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Select</TableHeader>
                  <TableHeader>Donation</TableHeader>
                  <TableHeader>Amount</TableHeader>
                </tr>
              </thead>
              <tbody>
                {donationCategories.map((category) => (
                  <React.Fragment key={category.title}>
                    <TableCell colSpan={3}>
                      <DonationHeader>{category.title}</DonationHeader>
                    </TableCell>
                    {category.donations.map((donation) => (
                      <TableRow key={donation.id}>
                        <TableCell>
                          <Input
                            type="checkbox"
                            checked={
                              selectedDonations.find(
                                (d) => d.id === donation.id,
                              )
                                ? true
                                : false
                            }
                            onChange={() => handleDonationSelect(donation)}
                          />
                        </TableCell>
                        <TableCell>{donation.title}</TableCell>
                        <TableCell>
                          {formatAmountInINR(donation.amount)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
            <LabelWrapper1>
              <Labelstyle>
                Total Amount:- {formatAmountInINR(totalDonationAmount)}
              </Labelstyle>

              <DonateButton
                className="App-button"
                onClick={handleDonateButtonClick}
                type="button"
              >
                Donate
              </DonateButton>
            </LabelWrapper1>
            <br />
            <Span2>Or, Donation of your choice:-</Span2>
            <LabelWrapper>
              <Input1
                type="number"
                placeholder="Enter amount"
                onChange={(e) => setCustomAmount(Number(e.target.value))}
              />
              <DonateButton1
                className="App-button"
                onClick={handleDonateButtonClick}
                type="button"
              >
                Donate
              </DonateButton1>
            </LabelWrapper>
          </form>
        </Container>
      </Wrapper>

      {isDonationFormVisible && (
        <DonationForm
          onClose={handleCloseForm}
          onSubmit={handleSubmitDonationForm}
          totalDonationAmount={totalDonationAmount}
          selectedDonations={selectedDonations}
          donationPageName={donationPageName}
        />
      )}

      <br />
      <Span>Donate via NEFT/RTGS/UPI</Span>
      <br />
      <Span1>Only for Indian Citizen/Indian Passport Holder</Span1>

      <PageWrapper>
        <CardStyle>
          <CardContentStyle>
            <TypoGraphyMain>Donate via NEFT/RTGS</TypoGraphyMain>
            <TableWrapper>
              <BankInfo accountInfo={yesBankAccountInfo} />
            </TableWrapper>
          </CardContentStyle>
        </CardStyle>
        <CardStyle>
          <CardContentStyle>
            <TypoGraphyMain>Donate via NEFT/RTGS</TypoGraphyMain>
            <TableWrapper>
              <BankInfo accountInfo={iciciBankAccountInfo} />
            </TableWrapper>
          </CardContentStyle>
        </CardStyle>
        <CardStyle>
          <CardContentStyle>
            <TypoGraphyMain>{maintitle}</TypoGraphyMain>
            <TypoGraphy>{subtitle1}</TypoGraphy>
            <TypoGraphy>{subtitle2}</TypoGraphy>
            <BarcodeImgStyle image={BarCode} />
          </CardContentStyle>
        </CardStyle>
      </PageWrapper>
    </>
  );
};
