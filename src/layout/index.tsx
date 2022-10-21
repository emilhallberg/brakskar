import { ReactElement } from "react";
import DashboardLayout from "./DashboardLayout";
import LandingLayout from "./LandingLayout";

export const getLandingLayout = (page: ReactElement) => (
  <LandingLayout>{page}</LandingLayout>
);

export const getDashboardLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
