import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getDashboardLayout } from "../layout";
import Page, { NextPageWithLayout } from "../layout/Page";

const ProfilePage: NextPageWithLayout = () => {
  const { user } = useUser();

  return (
    <Page title="Profile">
      <h6>Profile</h6>
      <hr />
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </Page>
  );
};

ProfilePage.getLayout = getDashboardLayout;

export const getServerSideProps = withPageAuthRequired();

export default ProfilePage;
