import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-wrap: wrap;
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
  children: ReactNode;
}

const Grid = ({ className, children }: GridProps) => (
  <Container
    className={className}
    variants={container}
    initial="hidden"
    animate="show"
  >
    {children}
  </Container>
);

export default Grid;
