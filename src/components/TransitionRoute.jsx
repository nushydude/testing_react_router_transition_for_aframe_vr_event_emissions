import React from 'react';
import { func, object } from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { Route } from 'react-router-dom';

const TransitionRoute = ({ component: Component, timeout, ...props }) =>
  (<Route
    {...props}
    // eslint-disable-next-line react/no-children-prop
    children={routeProps =>
      (<Transition in={Boolean(routeProps.match)} timeout={timeout}>
        {status => <Component {...routeProps} transitionState={status} />}
      </Transition>)}
  />);

TransitionRoute.propTypes = {
  component: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  timeout: object,
};

TransitionRoute.defaultProps = {
  timeout: { enter: 300, exit: 300 },
};

export default TransitionRoute;
