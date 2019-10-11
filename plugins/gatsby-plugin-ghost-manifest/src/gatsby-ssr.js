import React from 'react';
import { withPrefix } from 'gatsby';
import { defaultIcons } from './common.js';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { JssProvider } from 'react-jss';
import getPageContext from './getPageContext';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheet = new ServerStyleSheet(); //styled-components
  const pageContext = getPageContext();

  const app = (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}>
      <StyleSheetManager sheet={sheet.instance}>
        {React.cloneElement(bodyComponent, {
          pageContext,
        })}
      </StyleSheetManager>
    </JssProvider>
  );

  const body = renderToString(app);

  replaceBodyHTMLString(body);
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
    />,
    sheet.getStyleElement(),
  ]);

  return;
};

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
  let headComponents = [];

  const icons = pluginOptions.icons || defaultIcons;

  // If icons were generated, also add a favicon link.
  if (pluginOptions.icon) {
    let favicon = icons && icons.length ? icons[0].src : null;

    if (favicon) {
      headComponents.push(
        <link
          key={`gatsby-plugin-manifest-icon-link`}
          rel="shortcut icon"
          href={withPrefix(favicon)}
        />,
      );
    }
  }

  // Add manifest link tag.
  headComponents.push(
    <link
      key={`gatsby-plugin-manifest-link`}
      rel="manifest"
      href={withPrefix(`/manifest.webmanifest`)}
    />,
  );
  // The user has an option to opt out of the theme_color meta tag being inserted into the head.
  if (pluginOptions.theme_color) {
    let insertMetaTag = Object.keys(pluginOptions).includes(`theme_color_in_head`)
      ? pluginOptions.theme_color_in_head
      : true;

    if (insertMetaTag) {
      headComponents.push(
        <meta
          key={`gatsby-plugin-manifest-meta`}
          name="theme-color"
          content={pluginOptions.theme_color}
        />,
      );
    }
  }

  if (pluginOptions.legacy) {
    const iconLinkTags = icons.map(icon => (
      <link
        key={`gatsby-plugin-manifest-apple-touch-icon-${icon.sizes}`}
        rel="apple-touch-icon"
        sizes={icon.sizes}
        href={withPrefix(`${icon.src}`)}
      />
    ));

    headComponents = [...headComponents, ...iconLinkTags];
  }

  setHeadComponents(headComponents);
};
