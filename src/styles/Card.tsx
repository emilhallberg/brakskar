import { motion } from "framer-motion";
import styled from "styled-components";

const Card = styled(motion.div)`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.card};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.radius};
`;

export default Card;
