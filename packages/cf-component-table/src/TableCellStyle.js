import { capitalize, filterNone } from 'cf-style-container';

export default ({
  theme,
  condensed,
  striped,
  bordered,
  hover,
  bare,
  rowType,
  theadIndex,
  tbodyIndex,
  tfootIndex,
  rowIndex,
  cellIndex,
  align
}) =>
  filterNone({
    // Baseline cell styles
    borderTop: ((theadIndex === 0 || tbodyIndex === 0) && rowIndex === 0) ||
      bare
      ? 0
      : `1px solid ${theme.tableBorderColor}`,
    lineHeight: theme.lineHeight,
    padding: condensed ? theme.tableCondensedPadding : theme.tablePadding,
    verticalAlign: 'middle',
    textAlign: align,

    // For first th/td in the first row in the first thead or tbody
    borderTopLeftRadius: tbodyIndex === 0 && rowIndex === 0 && cellIndex === 0
      ? theme.borderRadius
      : undefined,
    // The last index is passed down as its complement so you can detect whether
    // it's the last child easily while preserving its magnitude

    // For last th/td in the first row in the first thead or tbody
    borderTopRightRadius: tbodyIndex === 0 && rowIndex === 0 && cellIndex < 0
      ? theme.borderRadius
      : undefined,

    // For first th/td (can be either) in the last row in the last thead, tbody, and tfoot
    borderBottomLeftRadius: (tbodyIndex < 0 || tfootIndex < 0) &&
      rowIndex < 0 &&
      cellIndex === 0
      ? theme.borderRadius
      : undefined,

    // For last th/td (can be either) in the last row in the last thead, tbody, and tfoot
    borderBottomRightRadius: (tbodyIndex < 0 || tfootIndex < 0) &&
      rowIndex < 0 &&
      cellIndex < 0
      ? theme.borderRadius
      : undefined,

    // Clear border-radius for first and last td in the last row in the last tbody for table with tfoot
    borderRadius: tfootIndex != null &&
      tbodyIndex < 0 &&
      rowIndex < 0 &&
      (cellIndex === 0 || cellIndex < 0)
      ? 0
      : undefined,

    // Responsive styles
    tablet: {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      borderTopWidth: 0,
      borderTop: cellIndex === 0
        ? `1px solid ${theme.tableBordercolor}`
        : undefined
    },

    // Row Styles
    borderColor: theme[`table${capitalize(rowType)}BorderColor`],
    backgroundColor: striped && rowIndex % 2 === 1
      ? theme[`tableStriped${capitalize(tableModifier)}Color`]
      : theme[`table${capitalize(rowType)}Color`],

    ':hover': hover
      ? { backgroundColor: theme[`tableHover${capitalize(rowType)}Color`] }
      : undefined,
    borderLeft: bordered ? `1px solid ${theme.tableBorderColor}` : undefined,

    [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
      display: 'block',
      border: 'none',
      float: 'left',
      clear: 'left',
      padding: 0,

      // Mobile stripe issue fix
      backgroundColor: striped && rowIndex % 2 === 1 ? 'transparent' : undefined
    }
  });
