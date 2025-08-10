import React from "react";
import {
  Select as ChakraSelect,
  Portal,
  createListCollection,
} from "@chakra-ui/react";

export interface SelectOption {
  label: string;
  value: string;
}

interface ISelectFieldProps {
  options: SelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  label?: string;
  maxW?: string | number;
}

export const SelectField: React.FC<ISelectFieldProps> = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  maxW,
}) => {
  const collection = React.useMemo(
    () => createListCollection({ items: options }),
    [options]
  );

  return (
    <ChakraSelect.Root
      value={value}
      onValueChange={(e) => {
        onChange(e.value);
      }}
      collection={collection}
      style={{ maxWidth: maxW }}
    >
      {label && <ChakraSelect.Label>{label}</ChakraSelect.Label>}
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Control>
        <ChakraSelect.Trigger>
          <ChakraSelect.ValueText placeholder={placeholder} />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>
      <Portal>
        <ChakraSelect.Positioner>
          <ChakraSelect.Content>
            {collection.items.map((item) => (
              <ChakraSelect.Item key={item.value} item={item}>
                {item.label}
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </ChakraSelect.Content>
        </ChakraSelect.Positioner>
      </Portal>
    </ChakraSelect.Root>
  );
};
