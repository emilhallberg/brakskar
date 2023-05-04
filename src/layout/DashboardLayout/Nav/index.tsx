import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import styled, { useTheme } from "styled-components";
import Card from "../../../styles/Card";
import Indicator from "./Indicator";

import Item from "./Item";

import NavContext from "./NavContext";

import Open from "./Open";
import Minimise from "./Minimise";

const StyledNav = styled(Card)<{ $minimised: boolean }>`
  position: relative;
  display: grid;
  grid-template-rows: ${({ theme }) => theme.size(1)} 1fr max-content max-content;
  padding: 0;
  overflow: hidden;
  max-height: 100vh;
`;

const Items = styled(motion.div)`
  position: relative;
`;

type NavItemChild = ReactNode & {
  props: { to: string };
};

interface NavProps {
  children?: NavItemChild[];
}

const Nav = ({ children = [] }: NavProps) => {
  const { pathname } = useRouter();
  const [open, isOpen] = useState(false);
  const [minimised, isMinimised] = useState(true);
  const theme = useTheme();

  const width = open ? theme.size(4) : theme.size(1);
  const height = minimised ? theme.size(1) : theme.size(children.length + 3);
  const toggleOpen = () => isOpen((o) => !o);
  const toggleMinimise = () => {
    isOpen(false);
    isMinimised((m) => !m);
  };

  const active = children.findIndex((c) => c.props.to === pathname);

  const value = {
    open,
    toggleOpen,
    active,
    minimised,
    toggleMinimise,
  };

  return (
    <NavContext.Provider value={value}>
      <StyledNav
        as={motion.nav}
        $minimised={minimised}
        animate={{ width, height }}
      >
        <Minimise />
        {!minimised && (
          <Items>
            {children}
            {active >= 0 && <Indicator />}
          </Items>
        )}
        {!minimised && <Open />}
      </StyledNav>
    </NavContext.Provider>
  );
};

Nav.Item = Item;

export default Nav;
