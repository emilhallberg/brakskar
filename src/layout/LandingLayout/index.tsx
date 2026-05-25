import Link from "next/link";
import { ReactNode } from "react";
import Clock from "@/components/Clock";

interface Props {
  children: ReactNode;
}

const LandingLayout = ({ children }: Props) => (
  <div className="fixed inset-0 grid auto-cols-[minmax(280px,360px)] grid-flow-col overflow-x-auto bg-[#f2e5d9] md:auto-cols-[360px]">
    <aside className="sticky left-0 z-20 grid grid-rows-[120px_1fr_max-content] bg-white p-8 shadow-sm md:p-12">
      <Clock />
      <nav className="flex flex-col items-start gap-2 text-3xl font-bold">
        <Link className="transition-colors hover:text-blue-700" href="/ranking">
          Ranking
        </Link>
        <Link
          className="transition-colors hover:text-blue-700"
          href="/snapsvisor"
        >
          Snapsvisor
        </Link>
        <Link
          className="transition-colors hover:text-blue-700"
          href="/brakfest"
        >
          Brakfest
        </Link>
      </nav>
      <footer className="text-xs uppercase tracking-wide">
        <p>Brakskär</p>
        <p>
          By{" "}
          <Link className="underline" href="https://hallbergemil.com">
            hallbergemil.com
          </Link>
        </p>
      </footer>
    </aside>
    {children}
  </div>
);

export default LandingLayout;
