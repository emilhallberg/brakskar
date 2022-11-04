import styled from "styled-components";
import useGetWeather from "../../services/useGetWeather";
import Element from "../Element";

const Container = styled(Element)`
  grid-area: wind;
  display: grid;
  place-items: center;
  grid-template-rows: ${({ theme }) => theme.size(1)};
  grid-template-columns: ${({ theme }) => theme.size(1.5)};
`;

interface Props {
  lat?: string;
  lon?: string;
}

const Wind = ({ lat, lon }: Props) => {
  const { weather } = useGetWeather({ lat, lon });

  return (
    <Container>
      <h5>{weather?.wind}</h5>
    </Container>
  );
};

export default Wind;
