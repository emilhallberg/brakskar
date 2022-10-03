import withServer, { WithServerHandler } from "../../../services/server";

const handler = async ({ req, res, providers }: WithServerHandler) => {
  if (req.method === "GET") {
    const events = await providers.telldus.getEvents();

    res.status(200).json(events);
  } else {
    res.status(404).json({ message: "Method not Found." });
  }
};

export default withServer(handler);
