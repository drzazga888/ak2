import { connect } from 'react-redux';
import { toggleRunning } from '../actions/automation';
import UI from '../';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, ownProps) => ({
    onPlayClicked: () => dispatch(toggleRunning(ownProps.isRunning)),
    onResetClicked: () => dispatch(resetBoard(ownProps.width, ownProps.height))
});

const Automaton = connect(mapStateToProps, mapDispatchToProps)();

export default Automaton;