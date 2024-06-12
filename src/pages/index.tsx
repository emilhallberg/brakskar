import Page, { NextPageWithLayout } from "../layout/Page";
import { getLandingLayout } from "../layout";
import Section from "../components/StartPage/Section";
import { ranking } from "./ranking";

const DashboardPage: NextPageWithLayout = () => (
  <Page title="Brakskär">
    <Section backgroundImage="/img/background.jpg" />
    <Section
      backgroundColor="#f2e5d9"
      linkHref="/ranking"
      linkText="Se aktuell ranking"
    >
      <h4>Topp 3</h4>
      <ol>
        {ranking
          .sort((a, b) => (a.points > b.points ? -1 : 1))
          .slice(0, 3)
          .map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
      </ol>
    </Section>
    <Section
      backgroundColor="#efdccc"
      linkHref="/snapsvisor"
      linkText="Ta en snaps"
    >
      <h4>Snapsvisor</h4>
      <p>
        Ta dig en snaps eller två och sjung med till de klassiska snapsvisorna
        sjunga på Brakskär.
      </p>
    </Section>
  </Page>
);

DashboardPage.getLayout = getLandingLayout;

export default DashboardPage;
