import { ReactNode } from "react";
import styled from "styled-components";
import Card from "../../styles/Card";

const Container = styled(Card)`
  position: relative;
  display: grid;
  width: ${({ theme }) => theme.size(2.5)};
  height: ${({ theme }) => theme.size(1)};
  padding: 0 ${({ theme }) => theme.spacing(1)};
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content max-content;
  grid-template-areas: "indicator value" ". title";
  outline: none;
  border: none;
  overflow: hidden;
  grid-gap: 0 ${({ theme }) => theme.spacing(0.2)};
  place-content: center;
`;

const Value = styled.h4`
  grid-area: value;
  margin: 0;
  align-self: flex-end;
  font-size: 1.2rem;
`;

const Title = styled.p`
  grid-area: title;
  margin: 0;
  align-self: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.6;
  font-size: 0.7rem;
`;

const Indicator = styled.div`
  grid-area: indicator;
  background: ${({ theme }) => theme.palette.primary};
  width: 2px;
  height: 75%;
  border-radius: 2px;
  align-self: center;
`;

const item = {
  hidden: { scale: 0.9 },
  show: { scale: 1 },
};

interface SensorProps {
  id: string;
  online: boolean;
  children: ReactNode;
}

const Sensor = ({ id, children }: SensorProps) => (
  <Container key={id} variants={item}>
    <Indicator />
    {children}
  </Container>
);

Sensor.Value = Value;
Sensor.Title = Title;

export default Sensor;
