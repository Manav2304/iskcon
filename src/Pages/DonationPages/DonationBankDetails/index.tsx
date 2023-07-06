import { Table, TableStyle, Wrapper } from "./style";
import { yesBankAccountInfo, iciciBankAccountInfo } from "./constant";
import { CopiedTableRow } from "./CopiedTableRow";
import { HeadingStyle } from "../../TitleBase/style";
import { MediaCard } from "./Card";

export const DonationBankDetails = () => {
  return (
    <div>
      <Wrapper>
        <TableStyle>
          <div className="grid-container">
            <div>
              <HeadingStyle>
                <h1>YES bank</h1>
              </HeadingStyle>
              <Table>
                <tbody>
                  {yesBankAccountInfo.map((info) => (
                    <CopiedTableRow label={info.label} value={info.value} />
                  ))}
                </tbody>
              </Table>
            </div>
            <div>
              <HeadingStyle>
                <h1>ICICI Bank</h1>
              </HeadingStyle>
              <Table>
                <tbody>
                  {iciciBankAccountInfo.map((info) => (
                    <CopiedTableRow label={info.label} value={info.value} />
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </TableStyle>
      </Wrapper>
      <MediaCard />
    </div>
  );
};
