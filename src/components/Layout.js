import React from 'react'
import Helmet from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookSquare);
library.add(faInstagram);
library.add(faTwitterSquare);

import '../assets/main.css';

import Header from './Header';
 
class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <div className='home'>
        <Helmet>
          <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,String.prototype.repeat,Array.prototype.find,Array.prototype.findIndex,Math.trunc" />
        </Helmet>
        <CssBaseline />
        <Header title={title} />
        <div className='content'>{children}</div>
      </div>
    )
  }
}

export default Layout;
