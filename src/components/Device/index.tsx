import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { DeviceState } from "../../entities/device";
import useDevice from "../../services/useDevice";
import Card from "../../styles/Card";

const Container = styled(Card)`
  display: grid;
  width: ${({ theme }) => theme.size(3)};
  height: ${({ theme }) => theme.size(1.3)};
  padding: 0 ${({ theme }) => theme.spacing(1)};
  grid-gap: 0 ${({ theme }) => theme.spacing(0.7)};
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "icon title" "icon state";
  outline: none;
  border: none;
  overflow: hidden;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.palette.highlight};
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.card};
  }
  @media (max-width: 768px) {
    width: ${({ theme }) => theme.size(3)};
  }
`;

const Title = styled.h6`
  grid-area: title;
  text-align: left;
  align-self: flex-end;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const State = styled.p`
  grid-area: state;
  justify-self: flex-start;
  opacity: 0.6;
  font-size: 0.7rem;
`;

const Icon = styled(motion.i)<{ $state: DeviceState }>`
  grid-area: icon;
  justify-self: center;
  align-self: center;
  background: none;
  margin-bottom: 10px;

  ${({ theme, $state }) =>
    $state === "on"
      ? css`
          background: ${theme.palette.bulb};
        `
      : css`
          background: ${theme.palette.background};
        `};
`;

interface DeviceProps {
  id: string;
  state: DeviceState;
  children: ReactNode;
}

const item = {
  hidden: { scale: 0.9 },
  show: { scale: 1 },
};

const Device = ({ id, state, children }: DeviceProps) => {
  const { toggle } = useDevice(id);

  return (
    <motion.div key={id} variants={item}>
      <Container
        as={motion.button}
        whileTap={{ scale: 0.9 }}
        onClick={() => toggle(state === "on" ? "off" : "on")}
      >
        <State>{state === "on" ? "ON" : "OFF"}</State>
        <Icon className="gg-bulb" $state={state} />
        {children}
      </Container>
    </motion.div>
  );
};

Device.Title = Title;

export default Device;
