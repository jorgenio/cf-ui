import TableCellStyle from './TableCellStyle';
import { filterNone } from 'cf-style-container';

export default props => {
  let style = TableCellStyle({ ...props, align: 'left' });
  const { theme, theadIndex } = props;
  style = {
    ...style,
    fontWeight: theme.tableHeadFontWeight,
    ':first-letter': {
      textTransform: 'capitalize'
    },
    verticalAlign: theadIndex != null ? 'bottom' : undefined,

    // For first th/td in the first row in the first thead or tbody
    borderTopLeftRadius: theadIndex === 0 && rowIndex === 0 && cellIndex === 0
      ? theme.borderRadius
      : undefined,
    // The last index is passed down as its complement so you can detect whether
    // it's the last child easily while preserving its magnitude

    // For last th/td in the first row in the first thead or tbody
    borderTopRightRadius: theadIndex === 0 && rowIndex === 0 && cellIndex < 0
      ? theme.borderRadius
      : undefined,

    // For first th/td (can be either) in the last row in the last thead, tbody, and tfoot
    borderBottomLeftRadius: theadIndex < 0 && rowIndex < 0 && cellIndex === 0
      ? theme.borderRadius
      : undefined,

    // For last th/td (can be either) in the last row in the last thead, tbody, and tfoot
    borderBottomRightRadius: theadIndex < 0 && rowIndex < 0 && cellIndex < 0
      ? theme.borderRadius
      : undefined
  };

  return filterNone(style);
};
