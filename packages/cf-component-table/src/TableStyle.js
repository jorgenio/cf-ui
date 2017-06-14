import { filterNone } from 'cf-style-container';

export default ({ theme, bordered }) =>
  filterNone({
    background: theme.colorWhite,
    borderCollapse: bordered ? 'separate' : 'collapse',
    borderSpacing: 0,
    maxWidth: '100%',
    width: '100%',
    marginBottom: theme.tableMarginBottom,

    // Table styles
    border: bordered ? '1px solid ${theme.tableBorderColor}' : undefined,
    borderLeft: bordered ? 0 : undefined,

    tablet: {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box'
    },

    [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
      display: 'block'
    }
  });
