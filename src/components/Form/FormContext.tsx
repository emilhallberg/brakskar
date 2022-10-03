import { createContext, useContext } from "react";

interface FromContextInterface {
  values: { [key: string]: string | number | readonly string[] | undefined };
  // eslint-disable-next-line no-unused-vars
  setValue: (key: string, value: string) => string;
}

const FormContext = createContext<FromContextInterface>({
  values: {},
  setValue: (key: string, value: string) => value,
});

export const useForm = () => useContext(FormContext);

export default FormContext;
