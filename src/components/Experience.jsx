import { string } from 'prop-types';
import React from 'react';
import { branch, renderNothing, withProps, shouldUpdate } from 'recompose';
import { compose } from 'lodash/fp';
import withTransition from '../hoc/withTransition';

const Experience = ({ experienceId }) =>
  (<div>
    Experience ID: {experienceId}
  </div>);

Experience.propTypes = {
  experienceId: string.isRequired,
};

const avoidRendering = ({ transitionState }) => {
  console.log('[Experience] transitionState:', transitionState);
  return transitionState === 'exited';
};

export default compose(
  withTransition,
  branch(avoidRendering, renderNothing),
  withProps(({ match }) => {
    if (match) {
      return {
        experienceId: match.params.experienceId,
      };
    }
    return null;
  }),
  shouldUpdate((props, nextProps) => {
    const { experienceId } = nextProps;
    return JSON.stringify(props) !== JSON.stringify(nextProps) && experienceId;
  }),
)(Experience);
