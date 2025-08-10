import React from "react";
import { AgGridReact } from "ag-grid-react";
import { Box } from "@chakra-ui/react";

interface IDataTableProps {
  rowData: any[];
  columnDefs: any[];
  loading?: boolean;
  pagination?: boolean;
  paginationPageSize?: number;
}

export const DataTable: React.FC<IDataTableProps> = ({
  rowData,
  columnDefs,
  loading = false,
  pagination = false,
  paginationPageSize = 10,
}) => {
  return (
    <Box
      className="ag-theme-alpine"
      style={{ height: 600, width: "100%" }}
      borderRadius="md"
      overflow="hidden"
      opacity={loading ? 0.5 : 1}
      pointerEvents={loading ? "none" : "auto"}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        defaultColDef={{
          resizable: false,
          filter: false,
          sortable: true,
        }}
      />
    </Box>
  );
};
