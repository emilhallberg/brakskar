import Image from "next/image";
import styled from "styled-components";
import Page, { NextPageWithLayout } from "../layout/Page";
import { getLandingLayout } from "../layout";

const Background = styled.div`
  position: relative;
`;

const DashboardPage: NextPageWithLayout = () => (
  <Page title="Brakskär">
    <Background>
      <Image
        src="/img/background.jpg"
        alt="Background"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
    </Background>
  </Page>
);

DashboardPage.getLayout = getLandingLayout;

export default DashboardPage;
