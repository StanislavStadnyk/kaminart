import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from 'components/Header/Header';
import MainPage from 'pages/MainPage/MainPage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Footer from 'components/Footer/Footer';

const App = () => {
  return (
    <div className='App' id='top-section'>
      <Router>
        <Header />

        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/gallery/:url' exact component={GalleryPage} />
          <Route component={NotFoundPage} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
