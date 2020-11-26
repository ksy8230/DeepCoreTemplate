import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { GlobalStyle } from './Components/GlobalStyles';

import DefaultLayout from './Layouts/DefaultLayout';
import Dataset from './pages/Dataset/index';
import Model from './pages/Model/index';
import { route } from './constants';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <DefaultLayout path={route.dataset} exact component={Dataset} />
          <DefaultLayout path={route.model} exact component={Model} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
