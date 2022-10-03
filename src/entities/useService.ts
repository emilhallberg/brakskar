import { KeyedMutator } from "swr";

interface UseService {
  error: string | null;
  loading: boolean;
  mutate: KeyedMutator<unknown>;
}

export default UseService;
