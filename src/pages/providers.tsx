import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useCallback, useState } from "react";
import styled from "styled-components";
import Form from "../components/Form";
import Provider, { ProviderContext } from "../components/Provider";
import { getDashboardLayout } from "../layout";

import Page, { NextPageWithLayout } from "../layout/Page";
import useGetProviders from "../services/useGetProviders";
import Grid from "../styles/Grid";

const Stack = styled(Grid)`
  display: grid;
  grid-auto-rows: max-content;
`;

const ProvidersPage: NextPageWithLayout = () => {
  const [open, setOpen] = useState(null);
  const { providers } = useGetProviders();

  const toggle = useCallback(
    (id) => {
      if (open === id) {
        setOpen(null);
      } else {
        setOpen(id);
      }
      return id;
    },
    [open],
  );

  return (
    <Page title="Providers">
      <ProviderContext.Provider value={{ open, toggle }}>
        <Stack>
          {providers?.map(({ id, title, state, metadata }) => (
            <Provider key={id} id={id} title={title} state={state}>
              {Object.entries(metadata).map(([key, value]) => (
                <Form.TextField
                  key={key}
                  name={key}
                  value={value}
                  label={key}
                  required
                />
              ))}
            </Provider>
          ))}
        </Stack>
      </ProviderContext.Provider>
    </Page>
  );
};

ProvidersPage.getLayout = getDashboardLayout;

export const getServerSideProps = withPageAuthRequired();

export default ProvidersPage;
