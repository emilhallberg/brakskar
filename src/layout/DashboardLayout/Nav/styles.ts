import { motion } from "framer-motion";
import styled from "styled-components";

export const NAV_WIDTH_OPEN = "225px";
export const NAV_WIDTH_CLOSED = "60px";
export const NAV_PADDING = "20px";
export const NAV_FONT_SIZE = "0.9rem";

export const NavItemIcon = styled(motion.i)`
  justify-self: center;
  transform: scale(0.9);
`;

export const NavItem = styled(motion.div)<{
  $active?: boolean;
  $open?: boolean;
}>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.size(1)} 1fr;
  grid-template-rows: ${({ theme }) => theme.size(1)};
  align-items: center;
  opacity: ${({ $active }) => ($active ? 1 : 0.8)};
  padding: 0 ${({ $open, theme }) => ($open ? theme.spacing(1) : "0")};
  text-decoration: none;
  font-size: ${NAV_FONT_SIZE};
  color: ${({ theme }) => theme.palette.text};
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  outline: none;
  border: none;
  background-color: transparent;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  color: ${({ theme, $active }) =>
    $active ? theme.palette.primary : theme.palette.text};

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.palette.primary};
    background-color: ${({ theme }) => theme.palette.highlight};
  }
  &:active {
    background-color: transparent;
  }
`;
