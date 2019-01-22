import React from 'react'
import Helmet from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Main from '../components/Main';

library.add(faFacebookSquare);
library.add(faInstagram);
library.add(faTwitterSquare);
library.add(faEnvelope);
library.add(faHeart);
library.add(faComments);

import '../assets/main.css';

import Header from './Header';
 
class Layout extends React.Component {
    render() {
        const { title, meta, htmlAttributes, children, showSidebar = true } = this.props
        return (
            <div className='home'>
                <Helmet
                    htmlAttributes={htmlAttributes}
                    meta={meta}
                    title={title}
                >
                    <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,String.prototype.repeat,Array.prototype.find,Array.prototype.findIndex,Math.trunc" />
                </Helmet>
                <CssBaseline />
                <Header title={title} />
                { showSidebar ? <Main>{children}</Main> : <div>{children}</div> }
            </div>
        )
    }
}

export default Layout;
