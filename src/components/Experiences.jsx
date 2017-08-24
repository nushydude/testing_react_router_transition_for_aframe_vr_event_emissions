import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'lodash/fp';
import { lifecycle, renderNothing, branch } from 'recompose';
import withTransition from '../hoc/withTransition';

const Experiences = () =>
  (<div>
    <h2>Experiences</h2>
    <p>
      <Link to="/experiences/canyons">Canyons</Link>
    </p>
    <p>
      <Link to="/experiences/mountains">Mountains</Link>
    </p>
    <p>
      <Link to="/experiences/waterfall">Waterfall</Link>
    </p>
    <p>
      <Link to="/experiences/beach">Beach</Link>
    </p>
  </div>);

const avoidRendering = ({ transitionState }) => {
  console.log('[Experiences] transitionState:', transitionState);
  return transitionState === 'exited';
};

export default compose(
  withTransition,
  lifecycle({
    componentWillMount() {
      console.log('[Experiences] componentWillMount');
      console.log('   props:', this.props);
    },
    componentWillReceiveProps(nextProps) {
      console.log('[Experiences] componentWillReceiveProps');
      console.log('   props:', this.props);
      console.log('   nextProps:', nextProps);
    },
  }),
  branch(avoidRendering, renderNothing),
)(Experiences);
