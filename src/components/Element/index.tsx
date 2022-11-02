import { FC, ReactNode } from "react";
import Card from "../../styles/Card";

interface ElementProps {
  className?: string;
  children: ReactNode;
}

const item = {
  hidden: { scale: 0.9 },
  show: { scale: 1 },
};

const Element: FC<ElementProps> = ({ className, children }: ElementProps) => (
  <Card variants={item} className={className}>
    {children}
  </Card>
);

export default Element;
