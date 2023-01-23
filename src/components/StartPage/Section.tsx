import { FC, ReactNode } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledSection = styled.section`
  position: relative;
  background: #f2e5d9;
  border-right: 1px solid #ffffff;
  display: grid;
  grid-template-rows: 1fr max-content;
  padding: 20vh 3vw 3vw;

  li {
    margin: 8px 0;
  }
  p {
    margin: 8px 0;
  }

  a {
    display: grid;
    place-items: center;
    background-color: transparent;
    padding: 10px;
    box-shadow: none;
    border: 1px solid black;
    text-decoration: none;
    transition: background-color 200ms ease-out;
    margin-bottom: 20px;

    &:visited,
    :active,
    :link {
      color: black;
    }

    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.palette.primary};
      border: 1px solid transparent;
    }
  }
`;

interface Props {
  backgroundImage?: string;
  backgroundColor?: "#f2e5d9" | "#efdccc" | "#dbc2ad" | "#d1b7a1";
  linkHref?: string;
  linkText?: string;
  children?: ReactNode;
}

const Section: FC<Props> = ({
  linkHref,
  linkText,
  backgroundImage,
  backgroundColor = "#f2e5d9",
  children,
}) => (
  <StyledSection style={{ backgroundColor }}>
    {backgroundImage && (
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        priority
        style={{ objectFit: "cover", zIndex: 0 }}
      />
    )}
    <article style={{ zIndex: 1 }}>{children}</article>
    {linkHref && (
      <Link href={linkHref} style={{ zIndex: 1 }}>
        {linkText ?? "Läs mer"}
      </Link>
    )}
  </StyledSection>
);

export default Section;
