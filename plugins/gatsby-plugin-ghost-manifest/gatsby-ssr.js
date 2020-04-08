'use strict';

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _react = _interopRequireDefault(require('react'));

const _gatsby = require('gatsby');

const _common = require('./common.js');

const _styledComponents = require('styled-components');

const _server = require('react-dom/server');

const _reactJss = require('react-jss');

const _getPageContext = _interopRequireDefault(require('./getPageContext'));

const _jsxFileName =
  '/Users/sumedhapramod/cookinginpjs/plugins/gatsby-plugin-ghost-manifest/src/gatsby-ssr.js';

exports.replaceRenderer = function(_ref) {
  const bodyComponent = _ref.bodyComponent,
    replaceBodyHTMLString = _ref.replaceBodyHTMLString,
    setHeadComponents = _ref.setHeadComponents;
  const sheet = new _styledComponents.ServerStyleSheet(); //styled-components

  const pageContext = (0, _getPageContext.default)();

  const app = _react.default.createElement(
    _reactJss.JssProvider,
    {
      registry: pageContext.sheetsRegistry,
      generateClassName: pageContext.generateClassName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
      },
      __self: this,
    },
    _react.default.createElement(
      _styledComponents.StyleSheetManager,
      {
        sheet: sheet.instance,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
        },
        __self: this,
      },
      _react.default.cloneElement(bodyComponent, {
        pageContext: pageContext,
      }),
    ),
  );

  const body = (0, _server.renderToString)(app);
  replaceBodyHTMLString(body);
  setHeadComponents([
    _react.default.createElement('style', {
      type: 'text/css',
      id: 'server-side-jss',
      key: 'server-side-jss',
      dangerouslySetInnerHTML: {
        __html: pageContext.sheetsRegistry.toString(),
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
      },
      __self: this,
    }),
    sheet.getStyleElement(),
  ]);
  return;
};

exports.onRenderBody = function(_ref2, pluginOptions) {
  const setHeadComponents = _ref2.setHeadComponents;
  // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
  let headComponents = [];
  const icons = pluginOptions.icons || _common.defaultIcons; // If icons were generated, also add a favicon link.

  if (pluginOptions.icon) {
    const favicon = icons && icons.length ? icons[0].src : null;

    if (favicon) {
      headComponents.push(
        _react.default.createElement('link', {
          key: 'gatsby-plugin-manifest-icon-link',
          rel: 'shortcut icon',
          href: (0, _gatsby.withPrefix)(favicon),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
          },
          __self: this,
        }),
      );
    }
  } // Add manifest link tag.

  headComponents.push(
    _react.default.createElement('link', {
      key: 'gatsby-plugin-manifest-link',
      rel: 'manifest',
      href: (0, _gatsby.withPrefix)('/manifest.webmanifest'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
      },
      __self: this,
    }),
  ); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (pluginOptions.theme_color) {
    const insertMetaTag = Object.keys(pluginOptions).includes('theme_color_in_head')
      ? pluginOptions.theme_color_in_head
      : true;

    if (insertMetaTag) {
      headComponents.push(
        _react.default.createElement('meta', {
          key: 'gatsby-plugin-manifest-meta',
          name: 'theme-color',
          content: pluginOptions.theme_color,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
          },
          __self: this,
        }),
      );
    }
  }

  if (pluginOptions.legacy) {
    const iconLinkTags = icons.map(function(icon) {
      return _react.default.createElement('link', {
        key: 'gatsby-plugin-manifest-apple-touch-icon-' + icon.sizes,
        rel: 'apple-touch-icon',
        sizes: icon.sizes,
        href: (0, _gatsby.withPrefix)('' + icon.src),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
        },
        __self: this,
      });
    });
    headComponents = [].concat(headComponents, iconLinkTags);
  }

  setHeadComponents(headComponents);
};
