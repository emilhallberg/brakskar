import styled from "styled-components";
import useGetWeather from "../../services/useGetWeather";

const StyledTitle = styled.h4`
  grid-area: title;
  display: grid;
  align-items: center;
`;

interface Props {
  lat?: string;
  lon?: string;
}

const Title = ({ lat, lon }: Props) => {
  const { weather } = useGetWeather({ lat, lon });

  return <StyledTitle>{weather?.name}</StyledTitle>;
};

export default Title;
