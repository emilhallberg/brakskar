import { DeviceState } from "../../../entities/device";
import withServer, { WithServerHandler } from "../../../services/server";

const handler = async ({ req, res, providers }: WithServerHandler) => {
  if (req.method === "POST") {
    const result = await providers.telldus.setDeviceState(
      req.query.id as string,
      req.query.state as DeviceState,
    );

    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "Method not Found." });
  }
};

export default withServer(handler);
