import { DonationPagesDescription } from "../PageLayout/index";
import { Payment } from "../Payment/donationTable";
import { annaDaan, donationCategories } from "./constant";
import { DonationTableWrapper } from "./style";

export const AnnaDaan: React.FC = () => {
  return (
    <div>
      <DonationPagesDescription
        title="Food for Life (Anna-Daan)"
        content={annaDaan}
      />
      <DonationTableWrapper>
        <Payment
          donationCategories={donationCategories}
          donationPageName={"AnnaDaan"}
        />
      </DonationTableWrapper>
    </div>
  );
};
