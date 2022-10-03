import { useCallback, useState } from "react";
import Provider from "../entities/provider";
import client from "./client";

interface UseUpdateProvider {
  // eslint-disable-next-line no-unused-vars
  update: (body: { [key: string]: string }) => Promise<void>;
  loading: boolean;
}

const useUpdateProvider = (id: Provider["id"]): UseUpdateProvider => {
  const [loading, isLoading] = useState(false);

  const update = useCallback(
    async (body: { [key: typeof id]: string }) => {
      isLoading(true);
      await client.patch(`/providers/${id}`, { body: { [id]: body } });
      isLoading(false);
    },
    [id],
  );

  return { update, loading };
};

export default useUpdateProvider;
