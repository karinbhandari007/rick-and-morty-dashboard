import React from "react";
import { Input } from "@chakra-ui/react";

interface ITextFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxW?: string | number;
}

export const TextField: React.FC<ITextFieldProps> = ({
  value,
  onChange,
  placeholder,
  maxW,
}) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxW={maxW}
    />
  );
};
