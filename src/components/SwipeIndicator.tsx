"use client";

import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import TapIcon from "./TapIcon";

const Container = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  background: black;
  display: grid;
  place-content: center;
    z-index: 50;
    grid-auto-rows: max-content;
    color: white;

    .move {
        position:relative;
        -webkit-animation: backandforth 2s ease 0s;
        -webkit-animation-iteration-count:infinite;
        animation: backandforth 2s ease 0s;
        animation-iteration-count:infinite;
    }

    @-webkit-keyframes backandforth {0%{left:0;} 50%{left:58%;} 100%{left:0;}}

    @keyframes backandforth {0%{left:0;} 50%{left:58%;} 100%{left:0;}}
    
    
    ${({ $visible }) => {
      if ($visible) {
        return `
          opacity: 0.7;
          pointer-events: auto;
        `;
      }
      return `
          opacity: 0;
          pointer-events: none;
        `;
    }}}
`;

type Props = {
  children?: ReactNode;
};

const SwipeDownIndicator = ({ children }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleTouchStart = () => {
      setVisible(false);
    };

    window.addEventListener("mousedown", handleTouchStart, { once: true });
    window.addEventListener("touchstart", handleTouchStart, { once: true });

    return () => {
      window.removeEventListener("mousedown", handleTouchStart);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <Container $visible={visible}>
      <TapIcon
        width={64}
        height={64}
        style={{ color: "white" }}
        className="move"
      />
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>BRAKFEST</h1>
    </Container>
  );
};

export default SwipeDownIndicator;
