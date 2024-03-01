import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function BasicColumnsGrid() {
  return (
    <Box sx={{ height: '50%', width: '100%' }}>
      <DataGrid
        columns={[{ field: 'source' }, { field: 'revenue' }, { field: 'value' }]}
        rows={[
          {
            id: 1,
            source: 'sicial',
            revenue: 260,
            value: '+35%',
          },
          {
            id: 2,
            source: 'search engines',
            revenue: 125,
            value: '-12%',
          },
          {
            id: 3,
            source: 'direct',
            revenue: 54,
            value: '+46%',
          },
          {
            id: 4,
            source: 'other',
            revenue: 146,
            value: '+24%',
          },
        ]}
      />
    </Box>
  );
}