import { SheetsRegistry } from 'jss';

function createPageContext() {
  return {
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    // eslint-disable-line
    return createPageContext();
  }
}

// export non-default as well, see https://github.com/gatsbyjs/gatsby/issues/2116#issuecomment-402591618
export { getPageContext };
