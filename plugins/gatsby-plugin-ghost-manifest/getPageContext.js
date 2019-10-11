"use strict";

exports.__esModule = true;
exports.getPageContext = exports.default = getPageContext;

var _jss = require("jss");

function createPageContext() {
  return {
    // This is needed in order to deduplicate the injection of CSS in the page.
    // eslint-disable-next-line no-undef
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _jss.SheetsRegistry()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    // eslint-disable-line
    return createPageContext();
  }
} // export non-default as well, see https://github.com/gatsbyjs/gatsby/issues/2116#issuecomment-402591618