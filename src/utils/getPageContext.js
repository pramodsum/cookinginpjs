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

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    // eslint-disable-line
    global.__INIT_MATERIAL_UI__ = createPageContext(); // eslint-disable-line
  }

  return global.__INIT_MATERIAL_UI__; // eslint-disable-line
}

// export non-default as well, see https://github.com/gatsbyjs/gatsby/issues/2116#issuecomment-402591618
export { getPageContext };
