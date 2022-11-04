import styled from "styled-components";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getDashboardLayout } from "../layout";
import Page, { NextPageWithLayout } from "../layout/Page";
import Time from "../components/Dashboard/Time";
import Title from "../components/Dashboard/Title";
import Temperature from "../components/Dashboard/Temperature";
import Climate from "../components/Dashboard/Climate";
import Devices from "../components/Dashboard/Devices";
import Wind from "../components/Dashboard/Wind";

const Container = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr max-content max-content;
  grid-gap: ${({ theme }) => theme.spacing(1)};
  grid-template-areas:
    "title wind temperature time"
    "climate climate climate climate"
    "devices devices devices devices";

  @media (max-width: 768px) {
    grid-template-columns: min-content min-content;
    grid-gap: ${({ theme }) => theme.spacing(0.7)};
    grid-template-areas:
      "title title title"
      "wind temperature time"
      "climate climate climate"
      "devices devices devices";
  }
`;

const DashboardPage: NextPageWithLayout = () => (
  <Page title="Dashboard">
    <Container>
      <Title />
      <Wind />
      <Temperature />
      <Time />
      <Climate />
      <Devices />
    </Container>
  </Page>
);

export const getServerSideProps = withPageAuthRequired();

DashboardPage.getLayout = getDashboardLayout;

export default DashboardPage;
