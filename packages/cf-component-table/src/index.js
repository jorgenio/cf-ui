import TableUnstyled from './Table';
import TableBodyUnstyled from './TableBody';
import TableCellUnstyled from './TableCell';
import TableFootUnstyled from './TableFoot';
import TableHeadUnstyled from './TableHead';
import TableHeadCellUnstyled from './TableHeadCell';
import TableRowUnstyled from './TableRow';
import TableStyle from './TableStyle';
import TableBodyStyle from './TableBodyStyle';
import TableCellStyle from './TableCellStyle';
import TableFootStyle from './TableFootStyle';
import TableHeadStyle from './TableHeadStyle';
import TableHeadCellStyle from './TableHeadCellStyle';
import TableRowStyle from './TableRowStyle';
import TableTheme from './TableTheme';
import TablePropTypes from './TablePropTypes';

import { applyTheme, createComponentStyles } from 'cf-style-container';

const Table = applyTheme(
  createComponentStyles({ table: TableStyle }, TableUnstyled),
  TableTheme
);
const TableBody = applyTheme(
  createComponentStyles({ tableBody: TableBodyStyle }, TableBodyUnstyled),
  TableTheme
);
const TableCell = applyTheme(
  createComponentStyles({ tableCell: TableCellStyle }, TableCellUnstyled),
  TableTheme
);
const TableFoot = applyTheme(
  createComponentStyles({ tableFoot: TableFootStyle }, TableFootUnstyled),
  TableTheme
);
const TableHead = applyTheme(
  createComponentStyles({ tableHead: TableHeadStyle }, TableHeadUnstyled),
  TableTheme
);
const TableHeadCell = applyTheme(
  createComponentStyles(
    { tableHeadCell: TableHeadCellStyle },
    TableHeadCellUnstyled
  ),
  TableTheme
);
const TableRow = applyTheme(
  createComponentStyles({ tableRow: TableRowStyle }, TableRowUnstyled),
  TableTheme
);

export {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeadCell,
  TableRow,
  TableUnstyled,
  TableBodyUnstyled,
  TableCellUnstyled,
  TableFootUnstyled,
  TableHeadUnstyled,
  TableHeadCellUnstyled,
  TableRowUnstyled,
  TableTheme,
  TablePropTypes
};
