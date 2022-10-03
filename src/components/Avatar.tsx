import { motion } from "framer-motion";
import Image from "next/image";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  display: grid;
  align-self: center;
  justify-self: center;
  position: relative;
  height: calc(
    ${({ theme }) => theme.size(1)} - ${({ theme }) => theme.spacing(1)}
  );

  width: calc(
    ${({ theme }) => theme.size(1)} - ${({ theme }) => theme.spacing(1)}
  );
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
`;

interface AvatarProps {
  src?: string;
  alt?: string;
  children: ReactNode;
}

const Avatar: FC<AvatarProps> = ({ src, alt, children }: AvatarProps) => (
  <Container>
    {src && alt ? (
      <Image src={src} alt={alt} layout="fill" priority />
    ) : (
      children
    )}
  </Container>
);

export default Avatar;
