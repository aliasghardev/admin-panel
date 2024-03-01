import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 3000, 2000, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 1398, 9800, 4800, 3800, 4300];
const xLabels = [
  'Jan',
  'Feb',
  'March',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export default function StackedBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
        { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}