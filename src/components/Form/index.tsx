import { FC, FormEvent, ReactNode, useCallback, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TextField from "./TextField";
import FormContext from "./FormContext";

const StyledForm = styled(motion.form)`
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
`;

interface FormProps {
  submit: Function;
  children: ReactNode;
}

interface FormComponent<T> extends FC<T> {
  TextField: typeof TextField;
}

const Form: FormComponent<FormProps> = ({ submit, children }: FormProps) => {
  const [values, setValues] = useState({});

  const setValue = useCallback((name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    return value;
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      await submit(values);
    },
    [submit, values],
  );

  return (
    <FormContext.Provider value={{ values, setValue }}>
      <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
    </FormContext.Provider>
  );
};

Form.TextField = TextField;

export default Form;
