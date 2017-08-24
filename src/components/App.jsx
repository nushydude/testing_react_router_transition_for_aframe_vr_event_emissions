import React from 'react';
import { Link } from 'react-router-dom';
import TransitionRoute from './TransitionRoute';
import Experience from './Experience';
import Experiences from './Experiences';

const App = () =>
  (<div>
    <h1>This is the App</h1>

    <Link to="/experiences">Experiences</Link>

    <TransitionRoute exact path="/experiences" component={Experiences} />
    <TransitionRoute exact path="/experiences/:experienceId" component={Experience} />
  </div>);

export default App;
