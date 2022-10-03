import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import Card from "../../styles/Card";

const Container = styled(Card)`
  display: grid;
  width: ${({ theme }) => theme.size(3)};
  height: ${({ theme }) => theme.size(3)};
  padding: ${({ theme }) => theme.spacing(1)};
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content max-content;
  grid-template-areas: "icon" "title" "state";
  outline: none;
  border: none;
  overflow: hidden;
`;

const Title = styled.h6`
  grid-area: title;
  margin: 0;
  justify-self: flex-start;
`;

const State = styled.p`
  grid-area: state;
  justify-self: flex-start;
  opacity: 0.8;
`;

const Icon = styled(motion.i)<{ $online: boolean }>`
  grid-area: icon;
  justify-self: center;
  align-self: center;
  background: none;

  ${({ theme, $online }) =>
    $online
      ? css`
          background: ${theme.palette.primary};
        `
      : css`
          background: ${theme.palette.background};
        `};
`;

const item = {
  hidden: { scale: 0.9 },
  show: { scale: 1 },
};

interface HubProps {
  id: string;
  online: boolean;
  children: ReactNode;
}

const Hub = ({ id, online, children }: HubProps) => (
  <Container key={id} variants={item}>
    <State>{online ? "Online" : "Offline"}</State>
    <Icon className="gg-data" $online={online} />
    {children}
  </Container>
);

Hub.Title = Title;

export default Hub;
