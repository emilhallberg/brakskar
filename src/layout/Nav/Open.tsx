import { motion } from "framer-motion";
import styled from "styled-components";

import { useNav } from "./NavContext";
import { NavItemIcon, NavItem, NAV_WIDTH_CLOSED } from "./styles";

const StyledNavItem = styled(NavItem)`
  grid-template-columns: ${NAV_WIDTH_CLOSED};
`;

const Open = () => {
  const { open, toggleOpen } = useNav();

  return (
    <StyledNavItem as={motion.button} onClick={toggleOpen} $open={open}>
      <NavItemIcon
        className="gg-chevron-double-right"
        animate={{ rotate: open ? 180 : 0 }}
      />
    </StyledNavItem>
  );
};

export default Open;
