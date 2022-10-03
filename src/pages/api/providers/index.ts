import withServer, { WithServerHandler } from "../../../services/server";

const handler = async ({ req, res, providers }: WithServerHandler) => {
  if (req.method === "GET") {
    res.status(200).json(Object.values(providers));
  } else {
    res.status(404).json({ message: "Method not Found." });
  }
};

export default withServer(handler);
