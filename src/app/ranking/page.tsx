import type { Metadata } from "next";
import { ranking } from "@/data/ranking";

export const metadata: Metadata = {
  title: "Ranking",
};

const RankingPage = () => (
  <main className="mx-auto grid max-w-5xl gap-8 p-6 md:p-10">
    <h1 className="text-4xl font-bold">Ranking</h1>
    <table className="w-full border-separate border-spacing-y-2">
      <thead>
        <tr className="text-left text-sm uppercase text-slate-500">
          <th className="px-3 py-2">Pos.</th>
          <th className="px-3 py-2">Namn</th>
          <th className="px-3 py-2">Poäng</th>
        </tr>
      </thead>
      <tbody>
        {[...ranking]
          .sort((a, b) => b.points - a.points)
          .map(({ id, name, points }, index) => (
            <tr
              key={id}
              className={`rounded-md ${
                index === 0 ? "bg-yellow-400" : "bg-white/70"
              }`}
            >
              <td className="rounded-l-md px-3 py-3">{index + 1}</td>
              <td className="px-3 py-3">{name}</td>
              <td className="rounded-r-md px-3 py-3">{points}</td>
            </tr>
          ))}
      </tbody>
    </table>
    <section className="grid gap-3">
      <h2 className="text-2xl font-bold">Senaste tävlingar</h2>
      <ul className="list-disc pl-5">
        <li>Brakskär Open 2025</li>
        <li>Brakskär Open 2024</li>
        <li>Julpadel 2023</li>
        <li>Brakskär Open 2023</li>
        <li>Midsommar 2023 - Lekar</li>
        <li>Midsommar 2023 - Quiz</li>
        <li>Fuerteventura Open</li>
        <li>Fuerteventura Volleyboll</li>
        <li>Flygplansquiz</li>
      </ul>
    </section>
    <section className="grid gap-3">
      <h2 className="text-2xl font-bold">Regler</h2>
      <ul className="list-disc pl-5">
        <li>
          Vinst mot högre rankad spelare ger mer poäng. T.ex. en spelare rankad
          4:a vinner moten spelare rankad 1:a får vinnaren en extra poäng. Detta
          gäller inte lagtävlingar.
        </li>
        <li>Oavgjort ger plus minus noll poäng</li>
        <li>Deltagande i officiell tävling ger poäng</li>
        <li>Vinst i match ger en poäng</li>
        <li>Vinst av Brakskär Open ger 3 poäng</li>
      </ul>
    </section>
  </main>
);

export default RankingPage;
