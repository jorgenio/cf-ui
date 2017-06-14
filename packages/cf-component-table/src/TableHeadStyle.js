export default ({ theme }) => ({
  background: theme.tableHeadBackground,
  tablet: {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box'
  },
  [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
    display: 'none'
  }
});
