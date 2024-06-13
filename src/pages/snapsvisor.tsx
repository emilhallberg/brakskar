import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import Page, { NextPageWithLayout } from "../layout/Page";

const dancingScript = Dancing_Script({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const GlobalStyles = createGlobalStyle`
  body{
    background: #faf3f3;
  }
`;

const Container = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: 400px;
  background: #faf3f3 url("/img/flowers.png") repeat-y left fixed;

  @media (max-width: 768px) {
    grid-template-columns: 90%;
  }
`;

const Section = styled.section`
  position: relative;
  height: 90vh;
  z-index: 0;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 8px;

  h1 {
    color: black;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  a {
    color: black;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  p,
  i {
    color: black;
    font-size: 1.1rem;
  }
`;

const DrinkingSongsPage: NextPageWithLayout = () => (
  <Page title="Snapsvisor">
    <meta name="theme-color" content="#faf3f3" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <Container>
      <Section>
        <h1
          className={dancingScript.className}
          style={{ textTransform: "none", fontSize: "3rem", fontWeight: "400" }}
        >
          Snapsvisor
        </h1>
        <Link href="#Kranmannen">Kranmannen</Link>
        <Link href="#Nubbe av granved">Nubbe av granved</Link>
        <Link href="#Köpa byxor">Köpa byxor</Link>
        <Link href="#Nu grönskar det">Nu grönskar det</Link>
        <Link href="#Pokalen">Pokalen</Link>
        <Link href="#Jag dricker brännvin">Jag dricker brännvin</Link>
        <Link href="#Nubbe goa">Nubbe goa</Link>
        <Link href="#Alla tallarna">Alla tallarna</Link>
        <Link href="#Fiktiv fest">Fiktiv fest</Link>
        <Link href="#Den där Finländska snapsvisan">
          Den där Finländska snapsvisan
        </Link>
        <Link href="#Min snaps">Min snaps</Link>
        <Link href="#Vi höjer den">Vi höjer den</Link>
        <Link href="#Snapsvisa från Gällivare">Snapsvisa från Gällivare</Link>
      </Section>
      <Section id="Kranmannen">
        <h1>Kranmannen</h1>
        <p>
          Nu så kommer kranmannen, kranmannen, kranmannen.
          <br />
          <br />
          Nu så kommer kranmannen, kran - mannen - kran. Kran kran!
        </p>
      </Section>
      <Section id="Nubbe av granved">
        <h1>Nubbe av granved</h1>
        <p>
          Nu tar vi nubben, ty den är gjord utav granve&apos;. Det bör man snart
          vid det hära laget va&apos; van ve&apos;.
          <br />
          <br />
          Hur skönt att tänka sig när man går där och knogar, att Akvaviten vi
          får utav våra skogar.
        </p>
      </Section>
      <Section id="Köpa byxor">
        <h1>Köpa byxor</h1>
        <p>
          Att köpa byxor, en prövning för många, Dom sitter sällan så bra. som
          dom ska.
          <br />
          <br />
          Dom är för korta, för långa, för trånga. Men en snaps sitter jämt lika
          bra!
        </p>
      </Section>
      <Section id="Nu grönskar det">
        <h1>Nu grönskar det</h1>
        <p>
          Nu grönskar det i dalens famn nu doftar äng och lid.
          <br />
          <br />
          Kom med, kom med på vandringsfärd i vårens glada tid!
          <br />
          <br />
          Var dag är som en gyllne skål till brädden fylld med vin.
          <br />
          <br />
          Så drick, min vän, drick sol och doft, ty dagen, den är din!
          <br />
          <br />
          Långt bort från stadens gråa hus vi glatt vår kosa styr och följer
          vägens vita band mot ljusa äventyr.
          <br />
          <br />
          Med öppna ögon låt oss se på livets rikedom, som gror och sjuder
          överallt där våren går i blom.
        </p>
      </Section>
      <Section id="Pokalen">
        <h1>Pokalen</h1>
        <p>
          Full och galen med moralen minimal, supen ger signalen till backkanal.
          <br />
          <br />
          Ritualen i lokalen är att tömma sin pokal, så skandalen i finalen blir
          total!
        </p>
      </Section>
      <Section id="Jag dricker brännvin">
        <h1>Jag dricker brännvin</h1>
        <p>
          Jag dricker brännvin nu mens jag lever, när jag är dö så har jag inte
          tid.
          <br />
          <br />
          När som jag själver ligger i mull, kan jag väl inte supa mig full.
          <br />
          <br />
          När som jag själver ligger i mull, kan jag väl inte supa.
        </p>
      </Section>
      <Section id="Nubbe goa">
        <h1>Nubbe goa</h1>
        <p>
          Nubben goa, nubben goa, är en heders sup.
          <br />
          <br />
          Uti alkoholet töm den om du tålet.
          <br />
          <br />
          Nubben goa, nubben goa är en heders sup!
        </p>
      </Section>
      <Section id="Alla tallarna">
        <h1>Alla tallarna</h1>
        <p>
          Alla tallarna, alla tallarna, alla stora alla små
          <br />
          <br />
          Alla tallarna, alla tallarna, ska vi koka &apos;rännvin på
          <br />
          <br />
          Alla tallarna, alla tallarna, ifrån roten till dess topp
          <br />
          <br />
          Alla tallarna, alla tallarna, ska vi ta och &apos;ricka opp
        </p>
      </Section>
      <Section id="Fiktiv fest">
        <h1>Fiktiv fest</h1>
        <p>
          Tre gubbar tre gubbar jag bjöd uppå en fest.
          <br />
          <br />
          Till Stålmannen, Tarzan, Fantomen med sin häst.
          <br />
          <br />
          Jag dukade fram fyra nubbar, en till mans.
          <br />
          <br />
          Sen drack jag alltihop för det var bara jag som fanns.
        </p>
      </Section>
      <Section id="Den där Finländska snapsvisan">
        <h1>Den där Finländska snapsvisan</h1>
        <p>Inte nu - men nu!</p>
      </Section>
      <Section>
        <h1>En gång i månan</h1>
        <i>Melodi: Mors lilla Olle 🎶</i>
        <p>
          <br />
          <br />
          En gång i månan är månen full
          <br />
          <br />
          Aldrig jag sett honom ramla omkull
          <br />
          <br />
          Stum av beundran hur mycket han tål
          <br />
          <br />
          Höjer jag glaset och utbringar skål!
        </p>
      </Section>
      <Section id="Min snaps">
        <h1>Min snaps</h1>
        <p>Min snaps, en skål, en trudelutt och sen så tar vi våran hutt!</p>
      </Section>
      <Section id="Vi höjer den">
        <h1>Vi höjer den</h1>
        <p>
          Vi höjer den, vi sänker den
          <br />
          <br />
          vi hälsar på varandra
          <br />
          <br />
          Så svänger vi den ene vei, sen svänger vi den andra vei
          <br />
          <br />
          Vi höjer den, vi sänker den, vi skålar med varandra!
        </p>
      </Section>
      <Section id="Snapsvisa från Gällivare">
        <h1>Snapsvisa från Gällivare</h1>
        <p>
          Kilimanjaro, det är en bergstopp
          <br />
          <br />
          Kebnekajse, det är en svensk topp
          <br />
          <br />
          Ringsjön, det är en rund sjö
          <br />
          <br />
          Och den långa ludna svansen
          <br />
          <br />
          Vad i allsin dar?
          <br />
          <br />
          Har du spriten kvar?
          <br />
          <br />
          Är du fuller eller snål, SKÅL!!!
        </p>
      </Section>
    </Container>
    <GlobalStyles />
  </Page>
);

export default DrinkingSongsPage;
