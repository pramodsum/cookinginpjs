import React from "react"
import { withStyles } from "@material-ui/core/styles"

import profileImg from "../../assets/about.jpg"
import AboutHeader from "../common/AboutHeader"

const styles = (theme) => {
    return {
        about: {
            fontSize: `0.9rem`,
        },
        aboutEmphasized: {
            // fontFamily: "'Homemade Apple', cursive",
            fontSize: `.9rem`,
        },
    }
}

const AboutMini = ({ classes }) => (
    <div>
        <AboutHeader />
        <p className={classes.about}>
            We've known each other pretty much forever, and this blog is our way
            of documenting our culinary exploits, and some non-culinary exploits
            as well. We're not always on the same page, or in the same state, or
            even on the same continent, but two things are generally true:{` `}
        </p>
        <p className={classes.aboutEmphasized}>
            At least one of us is not paying attention
        </p>
        <p className={classes.aboutEmphasized}>
            At least one of us is wearing her pajamas
        </p>
    </div>
)

export default withStyles(styles, { withTheme: true })(AboutMini)
