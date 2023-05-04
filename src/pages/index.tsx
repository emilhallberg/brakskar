import Page, { NextPageWithLayout } from "../layout/Page";
import { getLandingLayout } from "../layout";
import Section from "../components/StartPage/Section";
import { ranking } from "./ranking";

const DashboardPage: NextPageWithLayout = () => (
  <Page title="Brakskär">
    <Section backgroundImage="/img/background.jpg" />
    <Section
      backgroundColor="#f2e5d9"
      linkText="Läs mer om Brakskär"
      linkHref="https://sv.wikipedia.org/wiki/Braksk%C3%A4r"
    >
      <h4>Brakskär</h4>
      <p>
        En ö i skärgården utanför Iggesund i Hudiksvalls kommun, Gävleborgs län.
        På ön finns ett 30-tal fritidshus.
      </p>
      <p>
        Iggesund ligger söder om Hudiksvall, Österut gränsar samhället till
        Bottenhavet med en skärgård där bland annat den lilla ön Brakskär finns.
        Iggesund ligger på ön Iggesundsön, som är Hälsinglands största ö.
      </p>
    </Section>
    <Section
      backgroundColor="#efdccc"
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
  </Page>
);

DashboardPage.getLayout = getLandingLayout;

export default DashboardPage;
