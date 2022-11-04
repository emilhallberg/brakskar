import { motion } from "framer-motion";
import { ChangeEvent, FC, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "./FormContext";

const StyledLabel = styled(motion.label)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-gap: ${({ theme }) => theme.spacing(0.2)};
  font-size: 0.8rem;
`;

const StyledInput = styled(motion.input)`
  display: grid;
  padding: ${({ theme }) => theme.spacing(0.5)};
  background: ${({ theme }) => theme.palette.highlight};
  color: ${({ theme }) => theme.palette.text};
  outline: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 0.9rem;
  &:hover,
  :active,
  :focus {
    border: 1px solid ${({ theme }) => theme.palette.primary};
    box-shadow: ${({ theme }) => theme.shadow};
  }
  &:before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 5px solid #ffea00;
  }
`;

interface TextFieldProps {
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  type?: "text" | "password";
  required?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  name,
  value,
  label,
  placeholder,
  type = "text",
  required = false,
}: TextFieldProps) => {
  const { values, setValue } = useForm();

  useEffect(() => {
    setValue(name, value);
  }, [name, setValue, value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(name, e.currentTarget.value);
  };

  const camelCaseToLabel = (str: string) => {
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  return (
    <StyledLabel>
      {camelCaseToLabel(label || "")}
      <StyledInput
        name={name}
        type={type}
        value={values[name] || ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        required={required}
      />
    </StyledLabel>
  );
};

export default TextField;
