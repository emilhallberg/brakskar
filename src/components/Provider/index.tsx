import { AnimatePresence, motion } from "framer-motion";

import { createContext, ReactNode, useContext } from "react";
import styled, { css, useTheme } from "styled-components";
import useUpdateProvider from "../../services/useUpdateProvider";

import Card from "../../styles/Card";
import Button from "../Button";
import Form from "../Form";

const Container = styled(Card)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  overflow: hidden;
  position: relative;
`;

const Header = styled(Card)`
  z-index: 1;
  display: grid;
  width: 100%;
  height: ${({ theme }) => theme.size(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(1)};
  grid-template-columns: ${({ theme }) => theme.spacing(1)} 1fr max-content;
  grid-template-rows: ${({ theme }) => theme.spacing(1)};
  grid-template-areas: "icon title state";
  outline: none;
  border: none;
  overflow: hidden;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.palette.highlight};
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.card};
  }
`;

const Title = styled.h6`
  grid-area: title;
  display: grid;
  align-self: center;
  justify-self: flex-start;
`;

const Icon = styled(motion.i)<{ $state: "connected" | "disconnected" }>`
  grid-area: icon;
  justify-self: center;
  align-self: center;
  background: none;

  ${({ theme, $state }) =>
    $state === "connected"
      ? css`
          color: ${theme.palette.primary};
          background: ${theme.palette.primary};
        `
      : css`
          color: ${theme.palette.text};
          background: ${theme.palette.text};
        `};
`;

const State = styled.p`
  grid-area: state;
  justify-self: flex-start;
  opacity: 0.8;
`;

const Content = styled(motion.section)`
  z-index: 0;
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: ${({ theme }) => theme.spacing(1)};
`;

interface ProviderInterface {
  open: string | null;
  toggle(id: string): string;
}

export const ProviderContext = createContext<ProviderInterface>({
  open: null,
  toggle: (id: string) => id,
});

interface ProviderProps {
  id: string;
  title: string;
  state: "connected" | "disconnected";
  children: ReactNode;
}

const item = {
  hidden: { scale: 0.9 },
  show: { scale: 1 },
};

const Provider = ({ id, title, state, children }: ProviderProps) => {
  const { open, toggle } = useContext(ProviderContext);
  const theme = useTheme();
  const { update, loading } = useUpdateProvider(id);

  const height = open === id ? "auto" : theme.size(1);
  const borderRadius =
    open === id ? `${theme.radius} ${theme.radius} 0 0` : theme.radius;

  return (
    <motion.div key={id} variants={item}>
      <Container animate={{ height }}>
        <Header
          initial={false}
          as={motion.button}
          onClick={() => toggle(id)}
          animate={{ borderRadius }}
          disabled={loading}
        >
          <Icon className="gg-link" $state={state} />
          <Title>{title}</Title>
          <State>{state === "connected" ? "Connected" : "Disconnected"}</State>
        </Header>
        <AnimatePresence initial={false}>
          {open === id && (
            <Content
              key={id}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { y: 0, opacity: 1 },
                collapsed: { y: -100, opacity: 0 },
              }}
            >
              <Form submit={update}>
                {children}
                <Button type="submit">Save</Button>
              </Form>
            </Content>
          )}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
};

Provider.Title = Title;

export default Provider;
