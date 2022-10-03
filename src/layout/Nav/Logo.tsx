import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import Icon from "../../assets/Icon";
import Brakskar from "../../assets/Logo";
import { useNav } from "./NavContext";
import { NAV_FONT_SIZE, NAV_PADDING, NAV_WIDTH_CLOSED } from "./styles";

const StyledNavItem = styled(motion.a)<{
  $open: boolean;
}>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${NAV_WIDTH_CLOSED};
  padding: 0 ${({ $open }) => ($open ? NAV_PADDING : "0")};
  align-items: center;
  text-decoration: none;
  font-size: ${NAV_FONT_SIZE};
  transition: all 200ms cubic-bezier(0.73, 0.04, 0.04, 0.985);

  &:hover {
    color: black;
    background-color: whitesmoke;
  }
  &:active {
    background-color: transparent;
  }
`;

const StyledIcon = styled(Icon)`
  justify-self: center;
  height: 60%;
  width: 60%;
`;

const StyledLogo = styled(Brakskar)`
  height: 60%;
  width: 60%;
`;

const Logo = () => {
  const { open } = useNav();

  return (
    <Link href="/" passHref>
      <StyledNavItem $open={open}>
        {open ? <StyledLogo /> : <StyledIcon />}
      </StyledNavItem>
    </Link>
  );
};

export default Logo;
