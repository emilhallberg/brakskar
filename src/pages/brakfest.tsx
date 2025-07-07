import { createGlobalStyle } from "styled-components";
import { Bodoni_Moda } from "next/font/google";
import { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Page, { NextPageWithLayout } from "../layout/Page";
import SwipeDownIndicator from "../components/SwipeIndicator";

const bodoniModa = Bodoni_Moda({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

type Pin = {
  emoji: string;
  style: CSSProperties;
  tooltip: ReactNode;
};

const pins: Pin[] = [
  {
    emoji: "🍺",
    style: { left: "440px", top: "210px" },
    tooltip: (
      <p>
        Tält på B-plan.
        <br />
        <br />
        Här finner ni Brakskär Glamping. Här sover Evangelina, Hugo, Jonas och
        Moa.
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "480px", top: "300px" },
    tooltip: (
      <p>
        Vita huset.
        <br />
        <br />
        Här bor Emils far Anders och styvmor Laila. Här sover även Kalle,
        Paulina, Gabriel, Agahan, Peter och Olivier.
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "690px", top: "220px" },
    tooltip: (
      <p>
        Lillstugan.
        <br />
        <br />
        Detta är en gäststuga (även numera hemmakontor) med två rum. Här sover
        Thitiya, Kristian, Albin och Jesper.
        <br />
        <br />
        Kylskåp och frys finns även här för alla att kyla sina drycker etc.
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "850px", top: "240px" },
    tooltip: (
      <p>
        Kyrkan.
        <br />
        <br />
        Här bor Emils faster Erika och hennes familj. Fredrik, Maja, Ester,
        Hugo, Elias, Signe och Valter.
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "1030px", top: "270px" },
    tooltip: (
      <p>
        Tapar Bay Marina.
        <br />
        <br />
        Detta är Emils farfars (aka Drutten) stuga. Älskade Drutten, han såg
        fram emot att få träffa er alla. Men nog tror vi att han firar med oss
        från himlen 🤍🪽. Låt oss ta en druttskål tillsammans här! Det hade han
        nog velat! Här sover även Emil, Suppis, John och Angelica.
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "330px", top: "300px" },
    tooltip: (
      <p>
        Center Court.
        <br />
        <br />
        En aktivitetsyta. Här kan ni bl.a spela mjuktennis och lekar kommer att
        hållas här.
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "775px", top: "520px" },
    tooltip: (
      <p>
        Stora bryggan.
        <br />
        <br />
        Här kan ni ta ett dopp!
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "1020px", top: "460px" },
    tooltip: (
      <p>
        Lilla bryggan.
        <br />
        <br />
        Här kan ni sitta och hänga, men inte bada eftersom det finns stenar och
        det är grunt.
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "1150px", top: "190px" },
    tooltip: (
      <p>
        Dass.
        <br />
        <br />
        Ett dass med två sitsar, rekommenderar att gå tillsammans - mysigt!
        <br />
        <br />
        Behöver herrar kissa, ber vi er gärna att gå en bit in mot skogen. Mer
        info under rundvandringen.
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "337px", top: "360px" },
    tooltip: (
      <p>
        Vedeldad badtunna.
        <br />
        <br />
        Här är det varmt och skönt och här kan upp till 6 personer bada.
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "649px", top: "290px" },
    tooltip: (
      <p>
        Flaggstång.
        <br />
        <br />
        Samlingsplats, när vi vill ha allas uppmärksamhet ringer vi på en klocka
        och då samlas vi här!
      </p>
    ),
  },
  {
    emoji: "🍺",
    style: { left: "620px", top: "380px" },
    tooltip: (
      <p>
        Vedeldad bastu.
        <br />
        <br />
        Här kan upp till 6 personer basta. Det finns även en liten lounge
        utanför.
      </p>
    ),
  },
];

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }



    .scroll-container {
        position: relative;
        width: 100svw;
        height: 100svh;
        overflow-x: scroll;
        overflow-y: hidden;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .image-wrapper {
        position: relative;
        width: 1280px;
        height: 640px;
        flex-shrink: 0;
        z-index: 0;
        border-radius: 8px;
    }

    .background-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        pointer-events: none;
        z-index: 1;
    }

    
    .pin {
        position: absolute;
        font-size: 27px;
        display: grid;
        place-content: center;
        z-index: 10;
        transform: translate(-50%, -50%);
        
        .tooltip {
            /* From https://css.glass */
            background: rgba(0, 0, 0, 0.25);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(8.5px);
            -webkit-backdrop-filter: blur(8.5px);
            border: 1px solid rgba(0, 0, 0, 0.3);
            
            min-width: 200px;
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            padding: 10px;
            font-family: ${bodoniModa.style.fontFamily};
            font-size: 14px;
            display: none; /* Hidden by default */
            z-index: 100;
        }
        
        &:hover {
            .tooltip {
                display: block;
            }
        }
    }

`;

const BrakfestPage: NextPageWithLayout = () => (
  <Page title="Brakfest">
    <meta name="theme-color" content="#000" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <div className="scroll-container">
      <SwipeDownIndicator />
      <div className="image-wrapper">
        <Image
          src="/img/brakfest.png"
          alt="Map"
          className="background-image"
          fill
          priority
        />
        {pins.map((pin, index) => (
          <div key={index} className="pin" style={pin.style}>
            {pin.emoji}
            <div className="tooltip">{pin.tooltip}</div>
          </div>
        ))}
      </div>
    </div>
    <GlobalStyles />
  </Page>
);

export default BrakfestPage;
