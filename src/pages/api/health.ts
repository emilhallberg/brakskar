import withServer, { WithServerHandler } from "../../services/server";

const handler = async ({ res }: WithServerHandler) => {
  res.status(200).json({ status: "ok" });
};

export default withServer(handler);
