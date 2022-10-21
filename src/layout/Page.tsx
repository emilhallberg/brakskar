import { NextPage } from "next";
import Head from "next/head";
import { FC, ReactElement, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

const Page: FC<Props> = ({ title, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export default Page;
