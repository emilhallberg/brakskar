import { ReactNode } from "react";
import styled from "styled-components";
import Card from "../../styles/Card";

const Container = styled(Card)`
  display: grid;
  width: ${({ theme }) => theme.size(3)};
  height: ${({ theme }) => theme.size(3)};
  padding: ${({ theme }) => theme.spacing(1)};
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content max-content;
  grid-template-areas: "value" "title" "state";
  outline: none;
  border: none;
  overflow: hidden;
`;

const Value = styled.h5`
  grid-area: value;
  margin: 0;
  justify-self: center;
  align-self: center;
`;

const Title = styled.h6`
  grid-area: title;
  margin: 0;
  justify-self: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const State = styled.p`
  grid-area: state;
  justify-self: flex-start;
  opacity: 0.8;
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

const Sensor = ({ id, online, children }: SensorProps) => (
  <Container key={id} variants={item}>
    {children}
    <State>{online ? "Online" : "Offline"}</State>
  </Container>
);

Sensor.Value = Value;
Sensor.Title = Title;

export default Sensor;
