import type { Metadata } from "next";
import Link from "next/link";
import KanbanBoard from "./KanbanBoard";

export const metadata: Metadata = {
  title: "Kanban",
};

const KanbanPage = () => (
  <main className="mx-auto grid min-h-svh max-w-6xl content-start gap-6 p-6 md:p-10">
    <nav>
      <Link
        href="/"
        className="inline-grid border border-black px-3 py-2 text-sm font-bold transition hover:border-[#6d7745] hover:bg-[#6d7745] hover:text-white"
      >
        Tillbaka
      </Link>
    </nav>
    <header className="grid gap-2">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6d7745]">
        Midsommar
      </p>
      <h1 className="text-4xl font-bold">Kanban</h1>
    </header>
    <KanbanBoard />
  </main>
);

export default KanbanPage;
