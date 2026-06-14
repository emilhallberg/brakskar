import { Mr_De_Haviland, Bodoni_Moda } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import SnapsvisorKranmannen from "@/components/SnapsvisorKranmannen";
import SnapsvisorSongNav from "@/components/SnapsvisorSongNav";

export const metadata: Metadata = {
  title: "Snapsvisor",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const dancingScript = Mr_De_Haviland({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const songs = [
  { id: "Kranmannen", title: "Kranmannen" },
  { id: "Nubbe av granved", title: "Nubbe av granved" },
  { id: "Köpa byxor", title: "Köpa byxor" },
  { id: "Nu grönskar det", title: "Nu grönskar det" },
  { id: "Pokalen", title: "Pokalen" },
  { id: "Jag dricker brännvin", title: "Jag dricker brännvin" },
  { id: "Nubbe goa", title: "Nubbe goa" },
  { id: "Alla tallarna", title: "Alla tallarna" },
  { id: "Fiktiv fest", title: "Fiktiv fest" },
  { id: "Finsk snapsvisa", title: "Finsk snapsvisa" },
  { id: "En gång i månan", title: "En gång i månan" },
  { id: "Min snaps", title: "Min snaps" },
  { id: "Vi höjer den", title: "Vi höjer den" },
  { id: "Snapsvisa från Gällivare", title: "Snapsvisa från Gällivare" },
  { id: "Ett litet glas till maten", title: "Ett litet glas till maten" },
  { id: "Helan går", title: "Helan går" },
  { id: "Jag ska festa", title: "Jag ska festa" },
  { id: "Små nubbarna", title: "Små nubbarna" },
  { id: "Jag tror på akvavit", title: "Jag tror på akvavit" },
  { id: "Fyllebjörnarna", title: "Fyllebjörnarna" },
] as const;

const Section = ({
  children,
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section"> & { children: ReactNode }) => (
  <section
    className={`relative z-0 flex min-h-[90vh] flex-col justify-center gap-2 text-center text-[#6D7745] [&_a]:mb-2 [&_a]:text-xl [&_a]:font-semibold [&_a]:uppercase [&_a]:text-[#6D7745] [&_a]:no-underline [&_h1]:mb-2 [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:uppercase [&_h1]:text-[#6D7745] [&_i]:text-lg [&_p]:text-lg ${bodoniModa.className} ${className}`}
    {...props}
  >
    {children}
  </section>
);

const DrinkingSongsPage = () => (
  <main
    className="isolate grid justify-center bg-[#faf3f3] px-4 grid-cols-[minmax(0,400px)]"
    style={{
      backgroundImage: 'url("/img/snapsvisor-background.svg")',
      backgroundPosition: "center center",
    }}
  >
    <SnapsvisorKranmannen />
    <Section className="pt-[5vh]" id="snapsvisor-list">
      <h1
        className={`${dancingScript.className} text-6xl! normal-case! font-normal!`}
      >
        Snapsvisor
      </h1>
      <SnapsvisorSongNav songs={songs} />
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
        Hur skönt att tänka sig när man går där och knogar, att Akvaviten vi får
        utav våra skogar.
      </p>
    </Section>
    <Section id="Köpa byxor">
      <h1>Köpa byxor</h1>
      <p>
        Att köpa byxor, en prövning för många, Dom sitter sällan så bra. som dom
        ska.
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
        Jag dricker brännvin nu mens jag lever,
        <br />
        när jag är dö så har jag inte tid
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
    <Section id="Finsk snapsvisa">
      <h1>Finsk snapsvisa</h1>
      <p>Int nu, men NU!</p>
    </Section>
    <Section id="En gång i månan">
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
    <Section id="Ett litet glas till maten">
      <h1>Ett litet glas till maten</h1>
      <i>Melodi: Den blomstertid 🎶</i>
      <p>
        Ett litet glas till maten,
        <br />
        <br />
        vår törst den är så stor.
        <br />
        <br />
        Nu nalkas det en nubbe,
        <br />
        <br />
        i frostad flaska bor.
        <br />
        <br />
        Med bild och livlig värma,
        <br />
        <br />
        den stilla rinner ner,
        <br />
        <br />
        När man sen sig närma,
        <br />
        <br />
        vi tar oss några fler.
        <br />
        <br />
        Melodi: Den blomstertid
      </p>
    </Section>
    <Section id="Helan går">
      <h1>Helan går</h1>
      <p>
        Helan går,
        <br />
        <br />
        sjung hopp falleri faderallan lej.
        <br />
        <br />
        Helan går,
        <br />
        <br />
        sjung hopp falleri faderallan lej.
        <br />
        <br />
        Och den som inte helan tar,
        <br />
        <br />
        han inte heller halvan får.
        <br />
        <br />
        Helan gååååååååår,
        <br />
        <br />
        sjung hopp falleri faderallan lej.
        <br />
        <br />
      </p>
    </Section>
    <Section id="Jag ska festa">
      <h1>Jag ska festa</h1>
      <i>Melodi: Bamse 🎶</i>
      <p>
        Jag ska festa,
        <br />
        ta det lugnt med spriten,
        <br />
        ha det roligt utan att va full.
        <br />
        Inte krypa runt med festeliten,
        <br />
        ta det sansat för min egen skull.
        <br />
        Först en öl i torra strupen,
        <br />
        efter det så kommer supen.
        <br />
        <br />
        I med vinet, i med punchen,
        <br />
        sen en groggbuffé.
        <br />
        <br />
        Jag är skitfull, däckar först av alla.
        <br />
        Missar festen, men vad gör väl de?
      </p>
    </Section>
    <Section id="Små nubbarna">
      <h1>Små nubbarna</h1>
      <i>Melodi: Små grodorna 🎶</i>
      <p>
        Smånubbarna, små nubbarna,
        <br />
        er vill jag inte se.
        <br />
        Smånubbarna, små nubbarna,
        <br />
        er vill jag inte se.
        <br />
        <br />
        <br />
        I glasen, på borden, ska ni ej vara mer.
        <br />
        I glasen, på borden, ska ni ej vara mer.
        <br />
        <br />
        <br />
        För ni ska ner, för ni ska ner för ni ska ner i mig.
        <br />
        För ni ska ner, för ni ska ner för ni ska ner i mig.
        <br />
      </p>
    </Section>
    <Section id="Jag tror på akvavit">
      <h1>Jag tror på akvavit</h1>
      <i>Melodi: Jag tror på sommaren 🎶</i>
      <p>
        Jag tror, jag tror på Akvavit
        <br />
        Jag tror, jag tror på dynamit
        <br />
        <br />
        Den ger en kraft att sjunga ut och alla krämpor blir akut man glömmer
        vardagslivets jäkt och känner stundens ruseffekt
        <br />
        <br />
        En snaps, en skål, en trudelutt och sen så tar vi våran hutt!
      </p>
    </Section>
    <Section id="Fyllebjörnarna">
      <h1>Fyllebjörnarna</h1>
      <i>Melodi: Bumbibjörnarna 🎶</i>
      Hick hurra!
      <br />
      För här kommer fyllebjörnarna, ramlar fram igenom sagorna
      <br />
      <br />
      Åh vi får supa mer!
      <br />
      <br />
      Fyllebjörnsaften, den magiska kraften
      <br />
      O visst blir man full man dricker utav den
      <br />
      <br />
      Ondska och törnar, det klarar fyllebjörnar De kämpar och spriten segrar
      igen!
      <br />
      <br />
      Hick hurra!
      <br />
      För här kommer fyllebjörnarna, ramlar fram igenom sagorna
      <br />
      <br />
      Åh vi får supa mer! Skål!
    </Section>
  </main>
);

export default DrinkingSongsPage;
