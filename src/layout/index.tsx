import { motion } from "framer-motion";
import { ReactElement } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import User from "./User";

const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(5)};
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: 1fr;
  grid-template-areas: ". main .";
  grid-gap: ${({ theme }) => theme.spacing(2)};
  box-sizing: border-box;
  justify-self: center;
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing(1)};
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-template-rows: max-content 1fr;
    grid-template-areas: ". ." "main main";
    grid-gap: ${({ theme }) => theme.spacing(1)};
  }
`;

const Main = styled.main`
  grid-area: main;
`;

export const getDashboardLayout = (page: ReactElement) => (
  <Container>
    <Nav>
      <Nav.Item to="/" icon="home">
        Dashboard
      </Nav.Item>
      <Nav.Item to="/devices" icon="bulb">
        Devices
      </Nav.Item>
      <Nav.Item to="/sensors" icon="thermostat">
        Sensors
      </Nav.Item>
      <Nav.Item to="/hubs" icon="data">
        Hubs
      </Nav.Item>
      <Nav.Item to="/events" icon="calendar-today">
        Events
      </Nav.Item>
      <Nav.Item to="/providers" icon="link">
        Providers
      </Nav.Item>
    </Nav>
    <Main>{page}</Main>
    <User />
  </Container>
);
