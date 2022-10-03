import { getSession } from "@auth0/nextjs-auth0";
import withServer, { WithServerHandler } from "../../../services/server";

const handler = async ({ req, res, auth }: WithServerHandler) => {
  if (req.method === "PATCH") {
    const session = getSession(req, res);
    const id = session?.user.sub;

    const user = await auth.management
      .updateUserMetadata({ id }, { ...req.body })
      .catch(({ status, message }) => res.status(status).json({ message }));

    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Method not Found." });
  }
};

export default withServer(handler);
