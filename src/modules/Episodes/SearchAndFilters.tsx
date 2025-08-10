import React from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import { TextField } from "@/_components";

export interface IOption {
  label: string;
  value: string;
}

interface EpisodeSearchAndFiltersProps {
  search: string;
  setSearch: (val: string) => void;
  onSearch: () => void;
  loading: boolean;
}

export const EpisodeSearchAndFilters: React.FC<
  EpisodeSearchAndFiltersProps
> = ({ search, setSearch, onSearch, loading }) => {
  return (
    <Flex gap={4} mb={4} flexWrap="wrap" align="flex-end" justify="flex-start">
      <Box flex="1 1 300px" minW="200px">
        <TextField
          placeholder="Search by episode name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          maxW="100%"
        />
      </Box>
      <Box flex="0 0 120px">
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
