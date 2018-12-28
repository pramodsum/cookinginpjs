import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <CssBaseline />
        <Header title={title} />
        <div className='content'>{children}</div>
      </div>
    )
  }
}

export default Layout;
