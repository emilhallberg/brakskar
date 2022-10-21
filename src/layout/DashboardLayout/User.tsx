import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import Card from "../../styles/Card";

import { NavItem, NavItemIcon } from "./Nav/styles";
import Avatar from "../../components/Avatar";

const StyledNav = styled(Card)`
  position: relative;
  display: grid;
  grid-template-rows: max-content 1fr max-content max-content;
  padding: 0;
  overflow: hidden;
  max-height: 100vh;
`;

const StyledNavItem = styled(NavItem)`
  padding: 0;
`;

const User = () => {
  const [closed, isClosed] = useState(false);
  const theme = useTheme();
  const { pathname } = useRouter();
  const { user } = useUser();

  const width = theme.size(1);
  const height = closed ? theme.size(1) : theme.size(3);
  const toggle = () => isClosed((o) => !o);

  useEffect(() => {
    if (pathname) {
      isClosed(true);
    }
  }, [pathname]);

  return (
    <StyledNav as={motion.nav} animate={{ width, height }}>
      <StyledNavItem as={motion.button} onClick={toggle}>
        {user?.picture && user?.name && (
          <Avatar src={user.picture} alt={user.name}>
            {user.name}
          </Avatar>
        )}
      </StyledNavItem>
      {!closed && (
        <div>
          <Link href="/profile" passHref>
            <NavItem>
              <NavItemIcon className="gg-user" />
            </NavItem>
          </Link>
          <Link href="/api/auth/logout" passHref>
            <NavItem>
              <NavItemIcon className="gg-log-out" />
            </NavItem>
          </Link>
        </div>
      )}
    </StyledNav>
  );
};

export default User;
