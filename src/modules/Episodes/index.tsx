import { useState, useMemo, useCallback, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { Box, Heading, Flex, Spinner, Text } from "@chakra-ui/react";
import { DataTable } from "@/_components";
import GET_EPISODES from "@/graphql/queries/getEpisodes.graphql";
import { EpisodeSearchAndFilters } from "./SearchAndFilters";

interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: { id: string }[];
}

interface FilterEpisode {
  name?: string;
}

const Episodes = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const filter = useMemo<FilterEpisode>(
    () => ({
      name: search,
    }),
    [search]
  );

  const [getEpisodes, { data, loading, error }] = useLazyQuery(GET_EPISODES);

  const rowData = useMemo(() => {
    return (
      data?.episodes?.results?.map((ep: Episode) => ({
        id: ep.id,
        name: ep.name,
        air_date: ep.air_date,
        episodeCode: ep.episode,
        characterCount: ep.characters?.length || 0,
      })) || []
    );
  }, [data]);

  // Define columns for AG Grid
  const columnDefs = useMemo(
    () => [
      {
        headerName: "Episode Name",
        field: "name",
        sortable: true,
        filter: true,
        flex: 2,
      },
      {
        headerName: "Air Date",
        field: "air_date",
        sortable: true,
        filter: "agDateColumnFilter",
        flex: 1,
      },
      {
        headerName: "Episode Code",
        field: "episodeCode",
        filter: true,
        flex: 1,
      },
      {
        headerName: "Characters",
        field: "characterCount",
        sortable: true,
        filter: "agNumberColumnFilter",
        flex: 1,
      },
    ],
    []
  );

  const onSearch = useCallback(() => {
    setPage(1);
    getEpisodes({ variables: { page: 1, filter } });
  }, [filter, getEpisodes]);

  // Fetch on page change (if pagination implemented)
  useEffect(() => {
    if (page !== 1) {
      getEpisodes({ variables: { page, filter } });
    }
  }, [page, filter, getEpisodes]);

  useEffect(() => {
    // Run initial fetch for page 1 with current filter
    getEpisodes({ variables: { page: 1, filter } });
    setPage(1);
  }, []); // Run only once on mount

  return (
    <Box p={4} minHeight="calc(100vh - 80px)">
      <Heading mb={4}>Episodes</Heading>

      <EpisodeSearchAndFilters
        search={search}
        setSearch={setSearch}
        onSearch={onSearch}
        loading={loading}
      />

      {/* Loading/Error states */}
      {loading ? (
        <Flex justify="center" align="center" minH="600px" gap={3}>
          <Spinner size="xl" />
          <Text>Loading episodes...</Text>
        </Flex>
      ) : error ? (
        <Box p={4} bg="red.100" borderRadius="md">
          <Text color="red.700">Error loading episodes. Please try again.</Text>
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

export default Episodes;
