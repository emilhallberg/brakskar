import styled from "styled-components";
import useGetWeather from "../../services/useGetWeather";
import Card from "../../styles/Card";

const Container = styled(Card)`
  display: grid;
  width: ${({ theme }) => theme.size(3)};
  height: ${({ theme }) => theme.size(3)};
  padding: ${({ theme }) => theme.spacing(1)};
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  grid-template-areas: "title" "state";
  outline: none;
  border: none;
  overflow: hidden;
`;

const Title = styled.h5`
  grid-area: title;
  justify-self: center;
  align-self: center;
`;

const State = styled.div`
  display: flex;
  grid-area: state;
  justify-content: space-between;
  opacity: 0.8;
`;

const item = {
  hidden: { scale: 0.9 },
  show: { scale: 1 },
};

interface HubProps {
  lat?: string;
  lon?: string;
}

const Weather = ({ lat, lon }: HubProps) => {
  const { weather } = useGetWeather({ lat, lon });

  return (
    <Container variants={item}>
      <p>{weather?.name}</p>
      <Title>{weather?.temperature}</Title>
      <State>
        <p>{weather?.humidity}</p>
        <p>{weather?.wind}</p>
      </State>
    </Container>
  );
};

export default Weather;
