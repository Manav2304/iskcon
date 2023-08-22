import React, { useState } from "react";
import { options,option1, option2, option3,  option4,  generaldonation } from "./constant";
import { Button, Table } from "./style";
import { DonationPagesDescription } from "../PageLayout";
import { Payment } from "../Payment/donationTable";

export const  GitaDaan= () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
  };

  const renderTable = () => {
    if (selectedOption === "option1") {
      return (
        <Table>
          <Payment donationCategories={option1} />
        </Table>
      );
    }

    if (selectedOption === "option2") {
      return (
        <Table>
          <Payment donationCategories={option2} />
        </Table>
      );
    }

    if (selectedOption === "option3") {
      return (
        <Table>
          <Payment donationCategories={option3} />
        </Table>
      );
    }
    if (selectedOption === "option4") {
        return (
          <Table>
            <Payment donationCategories={option4} />
          </Table>
        );
      }
     

    return null;
  };

  return (
    <>
      <DonationPagesDescription title="Gita Daan" content={generaldonation} />
      {options.map((option) => (
        <div key={option.value}>
          <Button onClick={() => handleOptionClick(option.value)}>
            {option.label}
          </Button>
        </div>
      ))}
      {renderTable()}
    </>
  );
};