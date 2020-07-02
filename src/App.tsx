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

const App = () => {
  return (
    <div className='App' id='top-section'>
      <Router>
        <ScrollToTop />
        <Header />

        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/gallery/:url' component={GalleryPage} />
          <Route path='/contacts' component={ContactsPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>

        <Footer />

        <BackToTop />
      </Router>
    </div>
  );
};

export default App;
