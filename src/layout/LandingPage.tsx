import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Clock from "../components/Clock";

import Page, { NextPageWithLayout } from "./Page";

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-auto-flow: column;
`;

const Background = styled.div`
  position: relative;
`;

const Content = styled.aside`
  position: relative;
  display: grid;
  grid-template-rows: max-content 30% max-content;
  justify-content: space-between;
  padding: 5vw;
  align-content: center;
`;

const LandingPage: NextPageWithLayout = () => (
  <Page title="Home">
    <Container>
      <Background>
        <Image
          src="/img/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Background>
      <Content>
        <h1>Brakskär</h1>
        <Clock />
        <Link href="/api/auth/login">Login</Link>
      </Content>
    </Container>
  </Page>
);

export default LandingPage;
