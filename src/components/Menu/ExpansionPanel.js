import { withStyles } from '@material-ui/core/styles';

const ExpansionPanel = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',

    '&:not(:last-child)': {
      borderBottom: 0,
    },

    '&:before': {
      display: 'none',
    },
  },
});

export default ExpansionPanel;
