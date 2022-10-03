import { getSession } from "@auth0/nextjs-auth0";
import { ManagementClient } from "auth0";
import { NextApiRequest, NextApiResponse } from "next";

const initAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res);
  const id = session?.user.sub;

  const management = new ManagementClient({
    token: session?.accessToken,
    domain: (process.env.AUTH0_ISSUER_BASE_URL || "").replace("https://", ""),
    scope: process.env.AUTH0_SCOPE,
  });

  const metadata = await management
    .getUser({ id })
    .then((user) => user.user_metadata);

  return { management, metadata };
};

export default initAuth;
