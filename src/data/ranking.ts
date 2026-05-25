export type Rank = {
  id: string;
  name: string;
  points: number;
};

export const ranking: Rank[] = [
  { id: "1", name: "Emil", points: 5 + 1 + 1 + 6 + 9 },
  { id: "2", name: "Victor", points: 2 + 1 + 6 + 6 },
  { id: "3", name: "Anders", points: 7 + 1 + 1 + 4 },
  { id: "4", name: "Laila", points: 3 + 1 + 3 },
  { id: "5", name: "Petra", points: 5 + 1 + 1 + 6 + 3 },
  { id: "6", name: "Paulina", points: 8 + 1 + 4 + 3 },
  { id: "7", name: "Gabriel", points: 7 + 1 + 1 + 4 + 3 },
  { id: "8", name: "Suppis", points: 2 + 1 + 1 + 3 },
  { id: "9", name: "Sofia", points: 3 + 1 + 1 + 1 + 7 + 9 },
  { id: "10", name: "Kalle", points: 8 + 1 + 1 + 9 + 3 },
  { id: "11", name: "Fredrik", points: 3 },
  { id: "12", name: "Erika", points: 3 },
  { id: "13", name: "Signe", points: 3 },
  { id: "14", name: "Valter", points: 2 },
];
