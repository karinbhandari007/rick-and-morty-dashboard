import { useState, useMemo, useCallback, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import GET_CHARACTERS from "@/graphql/queries/getCharacters.graphql";

import { Box, Heading, Flex, Spinner, Text } from "@chakra-ui/react";
import { DataTable } from "@/_components";
import { genderColorMap, statusColorMap } from "@/constants";
import { CharacterSearchAndFilters } from "./SearchAndFilters";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [speciesFilter, setSpeciesFilter] = useState<string[]>([]);
  const [genderFilter, setGenderFilter] = useState<string[]>([]);

  const filter = useMemo(
    () => ({
      name: nameFilter,
      status: statusFilter[0],
      species: speciesFilter[0],
      gender: genderFilter[0],
    }),
    [nameFilter, statusFilter, speciesFilter, genderFilter]
  );

  const [getCharacters, { data, loading, error }] =
    useLazyQuery(GET_CHARACTERS);

  const rowData = useMemo(() => {
    return (
      data?.characters?.results?.map((char: any) => ({
        id: char.id,
        name: char.name,
        status: char.status,
        species: char.species,
        gender: char.gender,
        origin: char.origin?.name || "-",
        episodeCount: char.episode?.length || 0,
      })) || []
    );
  }, [data]);

  const columnDefs = useMemo(
    () => [
      {
        headerName: "Name",
        field: "name",
        sortable: true,
        filter: "agTextColumnFilter",
        flex: 1,
      },
      {
        headerName: "Status",
        field: "status",
        filter: "agTextColumnFilter",
        flex: 1,
        cellRenderer: (params: any) => {
          const color = statusColorMap[params.value] || "gray";
          return (
            <Box
              as="span"
              px={2}
              py={1.5}
              borderRadius="full"
              bg={`${color}.200`}
              color={`${color}.800`}
              minW="60px"
            >
              {params.value}
            </Box>
          );
        },
      },
      {
        headerName: "Species",
        field: "species",
        filter: "agTextColumnFilter",
        flex: 1,
      },
      {
        headerName: "Gender",
        field: "gender",
        filter: "agTextColumnFilter",
        flex: 1,
        cellRenderer: (params: any) => {
          const color = genderColorMap[params.value] || "gray";
          return (
            <Box
              as="span"
              px={2}
              py={1.5}
              borderRadius="full"
              bg={`${color}.200`}
              color={`${color}.800`}
              minW="60px"
            >
              {params.value}
            </Box>
          );
        },
      },
      {
        headerName: "Origin",
        field: "origin",
        filter: "agTextColumnFilter",
        flex: 1,
      },
      {
        headerName: "Episodes",
        field: "episodeCount",
        sortable: true,
        filter: "agNumberColumnFilter",
        flex: 1,
        cellRenderer: (params: any) => (
          <Box
            as="span"
            px={2}
            py={1}
            border="1px"
            borderColor="purple.500"
            color="purple.700"
          >
            {params.value} episodes
          </Box>
        ),
      },
    ],
    []
  );

  const onSearch = useCallback(() => {
    setPage(1);
    getCharacters({ variables: { page: 1, filter } });
  }, [filter, getCharacters]);

  useEffect(() => {
    if (page !== 1) {
      getCharacters({ variables: { page, filter } });
    }
  }, [page, filter, getCharacters]);

  useEffect(() => {
    // Run initial fetch for page 1 with current filter
    getCharacters({ variables: { page: 1, filter } });
    setPage(1);
  }, []); // Run only once on mount

  return (
    <Box p={4} minHeight="calc(100vh - 80px)">
      <Heading mb={4}>Characters</Heading>

      <CharacterSearchAndFilters
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        speciesFilter={speciesFilter}
        setSpeciesFilter={setSpeciesFilter}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        onSearch={onSearch}
        loading={loading}
      />

      {/* Loading and error */}
      {loading ? (
        <Flex justify="center" align="center" minH="600px" gap={3}>
          <Spinner size="xl" />
          <Text>Loading characters...</Text>
        </Flex>
      ) : error ? (
        <Box p={4} bg="red.100" borderRadius="md">
          <Text color="red.700">
            Error loading characters. Please try again.
          </Text>
        </Box>
      ) : (
        <DataTable
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          loading={loading}
        />
      )}
    </Box>
  );
};

export default Characters;
