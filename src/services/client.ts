const baseHeaders = { "Content-Type": "application/json" };

const config = { headers: {}, body: {}, stringify: true };

interface HandleError {
  external: boolean;
  error: string;
}

// Handles fetch errors in the Client and from BFF
const handleError = async ({ external, error }: HandleError) => {
  if (external) {
    // eslint-disable-next-line no-console
    console.error("Error in BFF: ", error);
    return Promise.reject(error);
  }

  // Message for developer when Client crashes.
  // eslint-disable-next-line no-console
  console.error("Error in Client: ", error);

  // Message for user when Client crashes
  const reason = "Oops! Something went wrong.";
  return Promise.reject(reason);
};

const convertResult = async (result: Response) => {
  const text = await result.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};

// Handles fetch result from BFF
const handleResult = async (result: Response) => {
  try {
    const data = await convertResult(result);
    const reason = { external: true, error: data };
    return result.ok ? Promise.resolve(data) : Promise.reject(reason);
  } catch (error) {
    const reason = { external: false, error };
    return Promise.reject(reason);
  }
};

const getAdditionalHeaders = () => {
  const locale = sessionStorage.getItem("locale") || "en-US";

  return {
    "Content-Language": locale,
  };
};

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestOptions {
  headers?: { [key: string]: unknown };
  body?: { [key: string]: unknown };
  stringify?: boolean;
}

interface RequestInit extends RequestOptions {
  method: Method;
}

// Help function for using fetch towards the BFF.
const fetcher = async (
  endpoint: string,
  { method, headers, body }: RequestInit,
) => {
  const url = `/api${endpoint}`;
  const additionalHeaders = getAdditionalHeaders();
  const init = {
    method,
    headers: { ...baseHeaders, ...additionalHeaders, ...headers },
    body: method === "GET" || method === "DELETE" ? null : JSON.stringify(body),
  };

  return fetch(url, init).then(handleResult).catch(handleError);
};

const get = async (url: string, { headers } = config) =>
  fetcher(url, {
    method: "GET",
    headers,
  });

const post = async (url: string, { headers, body } = config) =>
  fetcher(url, {
    method: "POST",
    headers,
    body,
  });

const patch = async (url: string, { headers, body }: RequestOptions) =>
  fetcher(url, {
    method: "PATCH",
    headers: headers || {},
    body: body || {},
  });

const remove = async (url: string, { headers } = config) =>
  fetcher(url, {
    method: "DELETE",
    headers,
  });

const put = async (url: string, { headers, body } = config) =>
  fetcher(url, {
    method: "PUT",
    headers,
    body,
  });

// Represents the Client's different actions towards the BFF
const client = { get, post, patch, delete: remove, put };

export default client;
