import styled from "styled-components";
import useGetWeather from "../../services/useGetWeather";
import Element from "../Element";

const Container = styled(Element)`
  grid-area: wind;
  display: grid;
  place-items: center;
  grid-template-columns: ${({ theme }) => theme.size(1.3)} max-content;
  height: ${({ theme }) => theme.size(0.75)};
  align-self: center;
  h5 {
    display: grid;
    grid-auto-columns: min-content;
    grid-auto-flow: column;
    place-items: center;
    place-content: center;
  }
`;

const Icon = styled.i<{ $direction: number }>`
  transform: scale(0.75) rotate(${({ $direction }) => $direction}deg);
`;

interface Props {
  lat?: string;
  lon?: string;
}

const Wind = ({ lat, lon }: Props) => {
  const { weather } = useGetWeather({ lat, lon });

  if (!weather) return null;

  const { wind, windDirection } = weather;

  return (
    <Container>
      <h5>
        {wind}
        <Icon className="gg-arrow-up" $direction={windDirection} />
      </h5>
    </Container>
  );
};

export default Wind;
