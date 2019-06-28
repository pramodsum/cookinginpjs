import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ExpansionPanelSummary = withStyles({
    root: {
        minHeight: 36,
    },
    expandIcon: {
        padding: 0,
        right: 'unset'
    }
})(MuiExpansionPanelSummary);

export default ExpansionPanelSummary;