import { connect } from 'react-redux';
import * as actions from '../actions/automaton';
import UI from '../components/ui';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
    onPlayClicked: () => dispatch(actions.toggleRunning()),
    onResetClicked: () => dispatch(actions.resetBoard()),
    onRowsChanged: e => e.target.checkValidity() && dispatch(actions.setRows(Number(e.target.value))),
    onColsChanged: e => e.target.checkValidity() && dispatch(actions.setCols(Number(e.target.value))),
    onIntervalChanged: e => e.target.checkValidity() && dispatch(actions.setInterval(Number(e.target.value))),
    onStepClicked: () => dispatch(actions.step())
});

const Automaton = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Automaton;
