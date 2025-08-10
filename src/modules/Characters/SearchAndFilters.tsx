import React from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import { SelectField, TextField } from "@/_components";
import { genderOptions, statusOptions } from "@/constants";

export interface IOption {
  label: string;
  value: string;
}

interface CharacterSearchAndFiltersProps {
  nameFilter: string;
  setNameFilter: (val: string) => void;
  statusFilter: string[];
  setStatusFilter: (val: string[]) => void;
  speciesFilter: string[];
  setSpeciesFilter: (val: string[]) => void;
  genderFilter: string[];
  setGenderFilter: (val: string[]) => void;
  onSearch: () => void;
  loading: boolean;
}

export const CharacterSearchAndFilters: React.FC<
  CharacterSearchAndFiltersProps
> = ({
  nameFilter,
  setNameFilter,
  statusFilter,
  setStatusFilter,
  speciesFilter,
  setSpeciesFilter,
  genderFilter,
  setGenderFilter,
  onSearch,
  loading,
}) => {
  return (
    <Flex gap={4} mb={4} flexWrap="wrap" align="flex-end" justify="flex-start">
      <Box flex="1 1 250px" minW="200px">
        <TextField
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          maxW="100%"
        />
      </Box>

      <Box flex="1 1 180px" minW="150px">
        <SelectField
          label="Status"
          placeholder="Filter by status"
          options={statusOptions}
          value={statusFilter}
          onChange={(value) => {
            setStatusFilter(value);
          }}
          maxW="100%"
        />
      </Box>

      <Box flex="1 1 180px" minW="150px">
        <SelectField
          label="Species"
          placeholder="Filter by species"
          options={genderOptions}
          value={speciesFilter}
          onChange={(value) => {
            setSpeciesFilter(value);
          }}
          maxW="100%"
        />
      </Box>

      <Box flex="1 1 180px" minW="150px">
        <SelectField
          label="Gender"
          placeholder="Filter by gender"
          options={genderOptions}
          value={genderFilter}
          onChange={(value) => {
            setGenderFilter(value);
          }}
          maxW="100%"
        />
      </Box>

      <Box flex="0 0 auto" minW="120px">
        <Button
          onClick={onSearch}
          loading={loading}
          width="100%"
          variant="solid"
          bg="blue.500"
          color="white"
          _hover={{ bg: "blue.600" }}
        >
          Search
        </Button>
      </Box>
    </Flex>
  );
};
