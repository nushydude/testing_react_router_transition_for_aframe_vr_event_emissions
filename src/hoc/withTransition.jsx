import { lifecycle } from 'recompose';

export default lifecycle({
  componentWillReceiveProps(nextProps) {
    const { transitionState } = this.props;
    const nextState = nextProps.transitionState;

    const statusChanged = transitionState !== nextState;

    if (!statusChanged) {
      return;
    }

    if (nextState === 'entering') {
      console.log('[withTransition] Entering');
    } else if (nextState === 'entered') {
      console.log('[withTransition] Entered');
    } else if (nextState === 'exiting') {
      console.log('[withTransition] Exiting');
    } else if (nextState === 'exited') {
      console.log('[withTransition] Exited');
    }
  },
});
