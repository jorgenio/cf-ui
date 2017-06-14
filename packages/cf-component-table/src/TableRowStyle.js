import { darken } from 'polished';
import { capitalize } from 'cf-style-container';

export default ({ theme, tbodyIndex, rowIndex, type }) => ({
  borderColor: theme[`table${capitalize(type)}BorderColor`],
  backgroundColor: theme[`table${capitalize(type)}Color`],

  tablet: {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box'
  },

  [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
    display: 'block',
    padding: theme.tablePadding,
    borderTop: rowIndex === 0 ? 'none' : `1px solid ${theme.tableBorderColor}`,
    ':after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    backgroundColor: darken(0.2, theme.colorWhite),

    ':hover': {
      '> td': {
        backgroundColor: tbodyIndex >= 0 ? 'transparent' : undefined
      }
    }
  }
});
