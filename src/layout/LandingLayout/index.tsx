import { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";
import Clock from "../../components/Clock";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-auto-columns: ${({ theme }) => theme.size(6)};
  grid-auto-flow: column;
  z-index: 0;
  overflow-x: auto;
`;

const Content = styled.aside`
  position: sticky;
  left: 0;
  display: grid;
  grid-template-rows: ${({ theme }) => theme.size(2)} 1fr max-content;
  padding: ${({ theme }) => theme.spacing(3)};
  background: ${({ theme }) => theme.palette.card};
  z-index: 1;
  @media (max-width: 768px) {
    z-index: -1;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: column;
  grid-template-columns: min-content;
  a {
    width: min-content;
    color: ${({ theme }) => theme.palette.text};
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.palette.primary},
      ${({ theme }) => theme.palette.primary} 50%,
      #000 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    &:before {
      content: "";
      background: ${({ theme }) => theme.palette.primary};
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      background-position: 0;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;

const Footer = styled.footer`
  p {
    font-size: 0.6rem;
  }
  a {
    font-size: 0.6rem;
    color: ${({ theme }) => theme.palette.text};
    text-decoration: none;
  }
`;

interface Props {
  children: ReactNode;
}

const LandingLayout = ({ children }: Props) => (
  <Container>
    <Content>
      <Clock />
      <Nav>
        <Link href="/dashboard">Hem</Link>
        <Link href="/midsummer">Midsommar</Link>
        <Link href="/weather">Väder</Link>
        <Link href="/wiki">Wiki</Link>
      </Nav>
      <Footer>
        <p>BRAKSKÄR</p>
        <p>
          ⇢ BY <Link href="https://hallbergemil.com">HALLBERGEMIL.COM</Link>
        </p>
      </Footer>
    </Content>
    {children}
  </Container>
);

export default LandingLayout;
