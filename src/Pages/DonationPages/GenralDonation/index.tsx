import React, { useState, useEffect } from "react"; // Import useEffect
import {
  options,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  generaldonation,
} from "./constant";
import { Button, ButtonContainer, Table } from "./style";
import { DonationPagesDescription } from "../PageLayout";
import { Payment } from "../Payment/donationTable";

export const GeneralDonation = () => {
  const [selectedOption, setSelectedOption] = useState("option1"); // Set a default value

  const handleOptionClick = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
  };

  const renderTable = () => {
    if (selectedOption === "option1") {
      return (
        <Table>
          <Payment donationCategories={option1} donationPageName={"AnnaDaan"} />
        </Table>
      );
    }

    if (selectedOption === "option2") {
      return (
        <Table>
          <Payment
            donationCategories={option2}
            donationPageName={"Care for Cow"}
          />
        </Table>
      );
    }

    if (selectedOption === "option3") {
      return (
        <Table>
          <Payment
            donationCategories={option3}
            donationPageName={"Daily Deity Seva"}
          />
        </Table>
      );
    }
    if (selectedOption === "option4") {
      return (
        <Table>
          <Payment
            donationCategories={option4}
            donationPageName={"Sadhu Bhojan"}
          />
        </Table>
      );
    }
    if (selectedOption === "option5") {
      return (
        <Table>
          <Payment
            donationCategories={option5}
            donationPageName={"Daily Gau Seva"}
          />
        </Table>
      );
    }
    if (selectedOption === "option6") {
      return (
        <Table>
          <Payment
            donationCategories={option6}
            donationPageName={"Ghee Lamp Seva"}
          />
        </Table>
      );
    }

    return null;
  };

  useEffect(() => {
    // Set a default option when the component is first mounted
    handleOptionClick("option1");
  }, []); // Empty dependency array to run this effect only once

  return (
    <>
      <DonationPagesDescription
        title="General Donation"
        content={generaldonation}
      />
      <ButtonContainer>
        {options.map((option) => (
          <div key={option.value}>
            <Button
              className={`Button ${
                selectedOption === option.value ? "active-button" : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </Button>
          </div>
        ))}
      </ButtonContainer>
      {renderTable()}
    </>
  );
};
