import {
  FestivalImage,
  FestivalInfo,
  HeadIng2,
  ParaGraph1,
  Description,
  ButtonStyle,
} from "./style";
import { Festival } from "./types";

interface FestivalCardProps {
  festival: Festival;
  isFestivalSelected: boolean;
  handleLearnMoreClick: (festival: Festival) => void;
  handleShowLessClick: (festival: Festival) => void;
}

export const FestivalCard = ({
  festival,
  isFestivalSelected,
  handleLearnMoreClick,
  handleShowLessClick,
}: FestivalCardProps) => (
  <div key={festival.name}>
    <FestivalImage src={festival.image} />
    <FestivalInfo>
      <HeadIng2>
        <h2>{festival.name}</h2>
      </HeadIng2>
      <ParaGraph1>
        <p>{festival.date}</p>
      </ParaGraph1>
      {isFestivalSelected ? (
        <>
          <Description>{festival.description}</Description>
          <ButtonStyle>
            <button onClick={() => handleShowLessClick(festival)}>
              Show Less
            </button>
          </ButtonStyle>
        </>
      ) : (
        <>
          <Description>{festival.description.substring(0, 100)}...</Description>
          <ButtonStyle>
            <button onClick={() => handleLearnMoreClick(festival)}>
              Read More
            </button>
          </ButtonStyle>
        </>
      )}
    </FestivalInfo>
  </div>
);
