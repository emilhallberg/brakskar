import { FC, ReactNode } from "react";
import Card from "../../styles/Card";

interface ElementProps {
  children: ReactNode;
}

const item = {
  hidden: { scale: 0.9 },
  show: { scale: 1 },
};

const Element: FC<ElementProps> = ({ children }: ElementProps) => (
  <Card variants={item}>{children}</Card>
);

export default Element;
