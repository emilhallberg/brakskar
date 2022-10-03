import { ManagementClient } from "auth0";
import { NextApiRequest, NextApiResponse } from "next";
import Provider from "../entities/provider";
import initTelldus from "../providers/telldus";
import initYr from "../providers/yr";
import initAuth from "./auth";

interface Metadata {
  [key: string]: Metadata;
}

export interface WithServerHandler {
  req: NextApiRequest;
  res: NextApiResponse;
  auth: {
    management: ManagementClient<any, any>;
    metadata: Metadata;
  };
  providers: { telldus: Provider };
}

const withServer =
  (handler: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
    const auth = await initAuth(req, res);
    const telldus = await initTelldus(auth.metadata?.telldus);
    const yr = await initYr(auth.metadata?.yr);
    const providers = { telldus, yr };

    await handler({ req, res, auth, providers });
  };

export default withServer;
