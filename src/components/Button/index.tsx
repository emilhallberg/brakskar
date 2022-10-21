import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled(motion.button)`
  display: grid;
  padding: ${({ theme }) => theme.spacing(0.5)};
  background: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.primaryText};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
    background: ${({ theme }) => theme.palette.primaryHighlight};
  }
  &:focus {
    box-shadow: ${({ theme }) => theme.shadow};
    background: ${({ theme }) => theme.palette.primaryHighlight};
  }
`;

interface ButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
}: ButtonProps) => (
  <StyledButton type={type} onClick={onClick} whileTap={{ scale: 0.9 }}>
    {children}
  </StyledButton>
);

export default Button;
