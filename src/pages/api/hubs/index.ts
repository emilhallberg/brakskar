import withServer, { WithServerHandler } from "../../../services/server";

const handler = async ({ req, res, providers }: WithServerHandler) => {
  if (req.method === "GET") {
    const hubs = await providers.telldus.getHubs();

    res.status(200).json(hubs);
  } else {
    res.status(404).json({ message: "Method not Found." });
  }
};

export default withServer(handler);
