import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Element from "../Element";

export const Container = styled(Element)`
  grid-area: time;
  display: grid;
  place-items: center;
  grid-template-columns: ${({ theme }) => theme.size(1.3)};
  height: ${({ theme }) => theme.size(0.75)};
  align-self: center;
`;

const Time = () => {
  const [date, setDate] = useState<Date>();

  const refreshClock = useCallback(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [refreshClock]);

  return (
    <Container>
      <h5>
        {date?.toLocaleTimeString("sv-SE", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h5>
    </Container>
  );
};

export default Time;
