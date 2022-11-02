import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled(motion.div)<{ $gridArea?: string }>`
  box-sizing: border-box;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-wrap: wrap;
  grid-area: ${({ $gridArea }) => $gridArea && $gridArea};
`;

const container = {
  hidden: { opacity: 0.9 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

interface GridProps {
  className?: string;
  gridArea?: string;
  children: ReactNode;
}

const Grid = ({ className, children, gridArea }: GridProps) => (
  <Container
    $gridArea={gridArea}
    className={className}
    variants={container}
    initial="hidden"
    animate="show"
  >
    {children}
  </Container>
);

export default Grid;
