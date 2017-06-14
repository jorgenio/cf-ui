import { filterNone } from 'cf-style-container';

export default ({ theme, tbodyIndex }) =>
  filterNone({
    borderTop: tbodyIndex > 0
      ? '2px solid ${theme.tableBorderColor}'
      : undefined,

    tablet: {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box'
    },

    [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
      display: 'block'
    }
  });
