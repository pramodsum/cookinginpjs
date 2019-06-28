import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';

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
})(MuiExpansionPanel);

export default ExpansionPanel;