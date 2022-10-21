import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ReactElement } from "react";

import { UserProvider } from "@auth0/nextjs-auth0";

import GlobalStyles from "../styles/globalStyles";
import { NextPageWithLayout } from "../layout/Page";
import themes from "../styles/themes";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <UserProvider>
      <ThemeProvider theme={themes.light}>
        {getLayout(<Component {...pageProps} />)}
        <GlobalStyles />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
