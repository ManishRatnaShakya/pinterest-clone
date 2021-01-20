/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GoogleLoginForm from '../GoogleLoginForm';
import GlobalStyle from '../../global-styles';
import SavedImages from '../SavedImages';

const AppWrapper = styled.div`
  margin: 0;
`;

export default function App() {
  const [token, setToken] = useState();
  console.log('token', token);
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage token={token} />
        </Route>
        <Route path="/login">
          <GoogleLoginForm setToken={setToken} token={token} />
        </Route>
        <Route path="/features" component={FeaturePage} />
        <Route path="/saved" component={SavedImages} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
