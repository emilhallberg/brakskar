import withServer, { WithServerHandler } from "../../../services/server";

const handler = async ({ req, res, providers }: WithServerHandler) => {
  if (req.method === "GET") {
    const devices = await providers.telldus.getDevices();

    res.status(200).json(devices);
  } else {
    res.status(404).json({ message: "Method not Found." });
  }
};

export default withServer(handler);
