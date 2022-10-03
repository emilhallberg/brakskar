import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useNav } from "./NavContext";
import { NavItemIcon, NavItem } from "./styles";

interface ItemProps {
  to: string;
  icon: string;
  children: ReactNode;
}

const Item = ({ to, icon, children }: ItemProps) => {
  const { open } = useNav();
  const { pathname } = useRouter();

  const active = pathname === to;

  return (
    <Link href={to} passHref>
      <NavItem $active={active} $open={open} whileTap={{ scale: 0.9 }}>
        <NavItemIcon className={`gg-${icon}`} />
        {open && children}
      </NavItem>
    </Link>
  );
};

export default Item;
