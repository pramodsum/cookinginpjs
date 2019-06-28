

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withStyles } from '@material-ui/core/styles'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import Main from './Main'
import withRoot from '../../utils/withRoot'
import Header from './Header'

library.add(faFacebookSquare)
library.add(faInstagram)
library.add(faTwitterSquare)
library.add(faEnvelope)
library.add(faHeart)
library.add(faComments)

const styles = theme => ({
  footer: {
    fontFamily: "'Zeyada', cursive",
    fontSize: '1.2rem',
    textAlign: 'center',
    justifySelf: 'flex-end',
    padding: '1rem 0',
    margin: '0 3rem',
    borderTop: '1px solid lightgray',

    '@media screen and (max-width: 960px)': {
      margin: '0 2rem',
    },
  },
  heart: {
    fontSize: '10px',
  },
})

const DefaultLayout  = ({ data, children, bodyClass, classes, showSidebar = true }) => {
  const site = data.allGhostSettings.edges[0].node
  return (
    <div className="home">
      <Helmet>
        <html lang={site.lang} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script dangerouslySetInnerHTML={{__html: '(window.adsbygoogle = window.adsbygoogle || []).push({});'}}></script>
        <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,String.prototype.repeat,Array.prototype.find,Array.prototype.findIndex,Math.trunc" />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>
      <Header title={site.title} />
      {showSidebar ? <Main>{children}</Main> : <div>{children}</div>}
      <footer className={classes.footer}>
        <div>
          Made with <small className={classes.heart}>♡</small> by{' '}
          <a href="https://github.com/pramodsum">Sumedha</a>
        </div>
      </footer>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
}

export default withRoot(withStyles(styles, { withTheme: true })(DefaultLayout));