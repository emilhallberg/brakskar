import withServer, { WithServerHandler } from "../../../services/server";

const handler = async ({ req, res, providers }: WithServerHandler) => {
  if (req.method === "GET") {
    const sensors = await providers.telldus.getSensors();

    res.status(200).json(sensors);
  } else {
    res.status(404).json({ message: "Method not Found." });
  }
};

export default withServer(handler);
