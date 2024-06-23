import React, { useEffect, useState } from "react";
import {
  options,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  monthlyRadharani,
} from "./constant";
import { Table, Button } from "./style";
import { DonationPagesDescription } from "../PageLayout";
import { Payment } from "../Payment/donationTable";
import { ButtonContainer } from "../GauSeva/style";

export const MonthlySeva = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
  };

  const renderTable = () => {
    if (selectedOption === "option1") {
      return (
        <Table>
          <Payment
            donationCategories={option1}
            donationPageName={"Monthly Deity Seva"}
          />
        </Table>
      );
    }

    if (selectedOption === "option2") {
      return (
        <Table>
          <Payment
            donationCategories={option2}
            donationPageName={"Monthly Fruits Seva"}
          />
        </Table>
      );
    }

    if (selectedOption === "option3") {
      return (
        <Table>
          <Payment
            donationCategories={option3}
            donationPageName={"Monthly Dry Fruits Seva"}
          />
        </Table>
      );
    }
    if (selectedOption === "option4") {
      return (
        <Table>
          <Payment
            donationCategories={option4}
            donationPageName={"Monthly Ghee Seva"}
          />
        </Table>
      );
    }
    if (selectedOption === "option5") {
      return (
        <Table>
          <Payment
            donationCategories={option5}
            donationPageName={"Monthly Milk Seva"}
          />
        </Table>
      );
    }
    if (selectedOption === "option6") {
      return (
        <Table>
          <Payment
            donationCategories={option6}
            donationPageName={"Monthly Vegetable Seva"}
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
        title="Monthly Radharani's Kitchen Seva"
        content={monthlyRadharani}
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
