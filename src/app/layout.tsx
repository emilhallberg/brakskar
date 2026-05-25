import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Brakskär",
    template: "%s | Brakskär",
  },
  description: "En ö i skärgården utanför Iggesund",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="sv">
    <body>{children}</body>
  </html>
);

export default RootLayout;
