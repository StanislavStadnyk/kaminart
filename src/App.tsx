import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { BackToTop } from 'other/lib/index';

// Pages
import MainPage from 'pages/MainPage/MainPage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

import ScrollToTop from 'other/utils';
import {PROD_URL} from "./config";

const App = () => (
  <div className='App' id='top-section'>
    <Router>
      <ScrollToTop />
      <Header />

      <Switch>
        <Route path={PROD_URL} exact component={MainPage} />
        <Route path={`${PROD_URL}/gallery/:url`} component={GalleryPage} />
        <Route path={`${PROD_URL}/contacts`} component={ContactsPage} />
        <Route path={`${PROD_URL}*`} component={NotFoundPage} />
      </Switch>

      <Footer />

      <BackToTop />
    </Router>
  </div>
);

export default App;
