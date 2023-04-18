import {
  Wrapper,
  Table,
  Paragraph,
  TableStyle,
  HeadingStyle,
  ImageTitle,
} from "./style";
import {
  yesBankAccountInfo,
  iciciBankAccountInfo,
  bhagavadGita,
} from "./constant";
import { CopiedTableRow } from "./CopiedTableRow";
import titleBaseImg from "../../assets/images/title-base.png";

export const DonationPage = () => {
  return (
    <Wrapper>
      <HeadingStyle>
        <h1>Donation</h1>
        <ImageTitle src={titleBaseImg} alt="Title Image" />
      </HeadingStyle>
      {bhagavadGita.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
      <TableStyle>
        <HeadingStyle>YES bank</HeadingStyle>
        <Table>
          <tbody>
            {yesBankAccountInfo.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
        <br />
        <HeadingStyle>ICICI Bank</HeadingStyle>
        <Table>
          <tbody>
            {iciciBankAccountInfo.map((info) => (
              <CopiedTableRow label={info.label} value={info.value} />
            ))}
          </tbody>
        </Table>
      </TableStyle>
    </Wrapper>
  );
};
