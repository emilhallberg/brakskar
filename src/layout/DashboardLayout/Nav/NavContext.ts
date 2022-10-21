import { createContext, useContext } from "react";

const NavContext = createContext({
  open: true,
  toggleOpen: () => {
    // eslint-disable-next-line no-unused-vars
    const v = 1;
  },
  minimised: true,
  toggleMinimise: () => {
    // eslint-disable-next-line no-unused-vars
    const v = 1;
  },
  active: 0,
});

export const useNav = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used in NavContext");
  }
  return context;
};

export default NavContext;
