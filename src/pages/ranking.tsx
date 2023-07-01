import { NextPage } from "next";
import styled from "styled-components";
import Page from "../layout/Page";

type Rank = {
  id: string;
  name: string;
  points: number;
};

export const ranking: Rank[] = [
  { id: "1", name: "Emil", points: 5 + 1 + 1 + 6 },
  { id: "2", name: "Victor", points: 2 + 1 + 6 },
  { id: "3", name: "Anders", points: 7 + 1 + 1 + 4 },
  { id: "4", name: "Laila", points: 3 + 1 + 3 },
  { id: "5", name: "Petra", points: 5 + 1 + 1 + 6 },
  { id: "6", name: "Paulina", points: 8 + 1 + 4 },
  { id: "7", name: "Gabriel", points: 7 + 1 + 1 + 4 },
  { id: "8", name: "Suppis", points: 2 + 1 + 1 + 3 },
  { id: "9", name: "Sofia", points: 3 + 1 + 1 + 1 + 7 },
  { id: "10", name: "Kalle", points: 8 + 1 + 1 + 9 },
  { id: "11", name: "Fredrik", points: 3 },
  { id: "12", name: "Erika", points: 3 },
  { id: "13", name: "Signe", points: 3 },
  { id: "13", name: "Valter", points: 2 },
];

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  justify-content: center;
  max-width: 1020px;
  padding: 3vh 3vw;
  margin: auto;
`;

const Table = styled.table`
  width: 100%;
  th,
  td {
    height: 50px;
    padding: 0 8px;
    text-align: left;
    border-radius: 4px;
  }
  tbody {
    tr {
      background-color: rgba(255, 255, 255, 0.3);
      transition: background-color 200ms ease-out;

      &:first-child {
        background-color: goldenrod;
      }

      &:nth-of-type(even) {
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

const RankingPage: NextPage = () => (
  <Page title="Ranking">
    <Container>
      <h1>Ranking</h1>
      <Table>
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Namn</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          {ranking
            .sort((a, b) => (a.points > b.points ? -1 : 1))
            .map(({ id, name, points }, index) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{points}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <section>
        <h2>Senaste tävlingar</h2>
        <ul>
          <li>Brakskär Open 2023</li>
          <li>Midsommar 2023 - Lekar</li>
          <li>Midsommar 2023 - Quiz</li>
          <li>Fuerteventura Open</li>
          <li>Fuerteventura Volleyboll</li>
          <li>Flygplansquiz</li>
        </ul>
      </section>
      <section>
        <h2>Regler</h2>
        <ul>
          <li>
            Vinst mot högre rankad spelare ger mer poäng. T.ex. en spelare
            rankad 4:a vinner moten spelare rankad 1:a får vinnaren en extra
            poäng. Detta gäller inte lagtävlingar.
          </li>
          <li>Oavgjort ger plus minus noll poäng</li>
          <li>Deltagande i officiell tävling ger poäng</li>
          <li>Vinst i match ger en poäng</li>
          <li>Vinst av Brakskär Open ger 3 poäng</li>
        </ul>
      </section>
    </Container>
  </Page>
);

export default RankingPage;
