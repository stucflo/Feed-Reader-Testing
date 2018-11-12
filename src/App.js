/* Import necessary dependencies */


import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


import { Route } from 'react-router-dom'

import mainpage from './components/pages/MainPage';
import searchpage from './components/pages/SearchPage';

/* Call Components from Components Folder */

class BooksApp extends React.Component {

  render() {
    return(
      <div>
        <Route exact path="/" component={mainpage} />
        <Route exact path="/search" component={searchpage} />
      </div>
    );
  }
}

export default BooksApp
