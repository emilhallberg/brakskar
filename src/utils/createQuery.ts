type Param = string | number | boolean | undefined | null;

const createQuery = (params: Record<string, Param | Param[]>) => {
  if (Object.keys(params).length === 0) return "";

  const query = Object.entries(params)
    .filter(([, value]) => !!value || value === 0)
    .map((pair) => {
      const [key, value] = pair;
      if (Array.isArray(value)) {
        const filter = value.filter((v) => !!v || v === 0);
        if (filter.length === 0) return undefined;
        return filter
          .map((param) => `${key}=${encodeURIComponent(param as string)}`)
          .join("&");
      }

      return `${key}=${encodeURIComponent(value as string)}`;
    })
    .filter((e) => e)
    .join("&");

  return `?${query}`;
};

export default createQuery;
