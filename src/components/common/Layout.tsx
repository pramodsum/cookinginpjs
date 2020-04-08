import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import DefaultLayout, { DefaultLayoutProps } from './DefaultLayout';
import { ThemeProvider } from '@chakra-ui/core';

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */

export const settingsQuery = graphql`
  query GhostSettings {
    allGhostSettings {
      edges {
        node {
          title
          description
          logo
          icon
          cover_image
          facebook
          twitter
          lang
          timezone
          codeinjection_head
          codeinjection_foot
          codeinjection_styles
          navigation {
              label
              url
          }
        }
      }
    }
    file(relativePath: { eq: "ghost-icon.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const LayoutSettingsQuery: React.FC<Partial<DefaultLayoutProps>> = props => (
  <StaticQuery
    query={settingsQuery}
    render={data => (
      <ThemeProvider>
        <DefaultLayout data={data} {...props} />
      </ThemeProvider>
    )}
  />
);

export default LayoutSettingsQuery;
