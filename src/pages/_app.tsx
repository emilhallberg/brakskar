import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
} from "react";

import { UserProvider, useUser } from "@auth0/nextjs-auth0";

import Global from "../styles/global";
import { NextPageWithLayout } from "../layout/Page";
import LandingPage from "../layout/LandingPage";
import themes from "../styles/themes";

const Auth = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <></>;
  }

  if (user) {
    return <>{children}</>;
  }

  return <LandingPage />;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <UserProvider>
      <ThemeProvider theme={themes.light}>
        <Auth>{getLayout(<Component {...pageProps} />)}</Auth>
        <Global />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
