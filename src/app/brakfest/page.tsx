import { Bodoni_Moda } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import SwipeDownIndicator from "@/components/SwipeIndicator";

export const metadata: Metadata = {
  title: "Brakfest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
        Här på Brakskär Glamping sover vildmarkspersonerna - Evangelina, Hugo,
        Jonas och Moa.
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
        Här bor Emils far Anders och styvmor Laila. Min far kan allt här i
        stugan, så för er frågvisa finns han till för att svara på alla era
        frågor! Här sover även Kalle, Paulina, Gabriel, Agahan, Peter och
        Olivier.
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
        Här bor Emils favorit faster Erika och hennes familj. Fredrik, Maja,
        Ester, Hugo, Elias, Signe och Valter.
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
        En aktivitetsyta. Här kommer lekar (eventuella uppträdande) att hållas.
        Ni kan även här möta den regerande Brakskär Open mästaren i mjuktennis.
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
        Här kan ni som gillar att bada ta ett dopp!
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
        Behöver herrar kissa, ber vi er gärna att gå en bit in mot skogen.
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
        Samlingsplats under dagen och kvällen. När vi vill ha allas
        uppmärksamhet ringer vi på en klocka och då samlas vi här!
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
        nog velat! Här sover även B-day boy, Queen Suppis, John och Angelica.
      </p>
    ),
  },
];

const BrakfestPage = () => (
  <main
    className={`${bodoniModa.className} flex h-svh w-svw items-center justify-center overflow-x-scroll overflow-y-hidden bg-black`}
  >
    <SwipeDownIndicator />
    <div className="relative h-[640px] w-[1280px] shrink-0 rounded-lg">
      <Image
        src="/img/brakfest.png"
        alt="Map"
        className="pointer-events-none object-cover"
        fill
        priority
        sizes="1280px"
      />
      {pins.map((pin) => (
        <div
          key={`${pin.style.left}-${pin.style.top}`}
          className="group absolute z-10 grid -translate-x-1/2 -translate-y-1/2 place-content-center text-[27px]"
          style={pin.style}
        >
          {pin.emoji}
          <div className="absolute bottom-full left-1/2 z-[100] hidden min-w-[230px] -translate-x-1/2 rounded-2xl border border-black/30 bg-black/25 p-2.5 text-sm text-white shadow-lg backdrop-blur group-hover:block">
            {pin.tooltip}
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default BrakfestPage;
