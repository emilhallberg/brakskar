import { motion } from "framer-motion";
import styled from "styled-components";

import { useNav } from "./NavContext";
import { NavItemIcon, NavItem, NAV_WIDTH_CLOSED } from "./styles";

const StyledNavItem = styled(NavItem)`
  grid-template-columns: ${NAV_WIDTH_CLOSED};
`;

const Minimise = () => {
  const { minimised, open, toggleMinimise } = useNav();

  return (
    <StyledNavItem
      as={motion.button}
      onClick={toggleMinimise}
      $open={open}
      whileTap={{ scale: 0.9 }}
    >
      <NavItemIcon
        className="gg-menu"
        animate={{ rotate: minimised ? 0 : 90 }}
      />
    </StyledNavItem>
  );
};

export default Minimise;
