import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import profileImg from '../../assets/about.jpg'
import bgy from '../../assets/bgyl.png'

const styles = (theme) => {
    return {
        img: {
            padding: `1rem 2rem 0`,
            width: `100%`,
            height: `auto`,
            transition: `opacity .4s`,
            borderRadius: `50%`,

            '&:hover': {
                opacity: `.75`,
            },
        },
        aboutTitle: {
            fontFamily: `'Homemade Apple', cursive`,
            marginBottom: 0,
        },
        aboutSubtitle: {
            fontSize: `1rem`,
            margin: `8px 0`,

            '& a': {
                padding: `8px 0`,
            },

            '& a:hover': {
                background: `url(${bgy}) repeat`,
            },
        },
    }
}

const SUMU_EMAIL = `mailto:sumu@cookinginpjs.com`
const ANU_EMAIL = `mailto:anu@cookinginpjs.com`

const AboutHeader = ({ classes }) => (
  <>
    <img className={classes.img} src={profileImg} />
    <h3 className={classes.aboutTitle}>Hello and welcome!</h3>
    <p className={classes.aboutSubtitle}>
      We're <a href={SUMU_EMAIL}>Sumu</a> & <a href={ANU_EMAIL}>Anu</a>.
    </p>
  </>
)

export default withStyles(styles, { withTheme: true })(AboutHeader)
