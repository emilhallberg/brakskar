import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";
import { useNav } from "./NavContext";

const StyledIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 3px;
  height: 100%;
  border-radius: 1.5px;
  background-color: ${({ theme }) => theme.palette.primary};
`;

const Indicator = () => {
  const { active } = useNav();
  const theme = useTheme();

  return (
    <StyledIndicator
      animate={{
        y: `calc(${active} * ${theme.size(1)})`,
        height: theme.size(1),
      }}
    />
  );
};

export default Indicator;
