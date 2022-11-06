import styled from "styled-components";
import useGetWeather from "../../services/useGetWeather";
import Element from "../Element";

const Container = styled(Element)`
  grid-area: temperature;
  display: grid;
  place-items: center;
  grid-template-columns: ${({ theme }) => theme.size(1.3)};
  height: ${({ theme }) => theme.size(0.75)};
  align-self: center;
`;

interface Props {
  lat?: string;
  lon?: string;
}

const Temperature = ({ lat, lon }: Props) => {
  const { weather } = useGetWeather({ lat, lon });

  return (
    <Container>
      <h5>{weather?.temperature}</h5>
    </Container>
  );
};

export default Temperature;
