import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';
import { StaticQuery, graphql } from 'gatsby';
import url from 'url';
import ImageMeta from './ImageMeta';
// @ts-ignore
import config from '../../../utils/siteConfig';
import { Settings, Page } from '../../../utils/types';

export type WebsiteMetaProps = {
  data: Page;
  settings?: Settings;
  canonical: string;
  title?: string;
  description?: string;
  image?: string;
  type: string;
};

const WebsiteMeta: React.SFC<WebsiteMetaProps> = ({
  data,
  settings,
  canonical,
  title,
  description,
  image,
  type,
}) => {
  const websiteSettings = settings.allGhostSettings.edges[0].node;
  const publisherLogo = url.resolve(config.siteUrl, websiteSettings.logo || config.siteIcon);
  let shareImage = image || data.feature_image || _.get(settings, `cover_image`, null);
  shareImage = shareImage ? url.resolve(config.siteUrl, shareImage) : null;
  description =
    description ||
    data.meta_description ||
    data.description ||
    config.siteDescriptionMeta ||
    websiteSettings.description;
  title = `${title || data.meta_title || data.name || data.title} - ${websiteSettings.title}`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={websiteSettings.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        {websiteSettings.twitter && (
          <meta
            name="twitter:site"
            content={`https://twitter.com/${websiteSettings.twitter.replace(/^@/, ``)}/`}
          />
        )}
        {websiteSettings.twitter && (
          <meta name="twitter:creator" content={websiteSettings.twitter} />
        )}
        <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": "${type}",
                        "url": "${canonical}",
                        ${
                          shareImage
                            ? `"image": {
                                "@type": "ImageObject",
                                "url": "${shareImage}",
                                "width": "${config.shareImageWidth}",
                                "height": "${config.shareImageHeight}"
                            },`
                            : ``
                        }
                        "publisher": {
                            "@type": "Organization",
                            "name": "${websiteSettings.title}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "${publisherLogo}",
                                "width": 60,
                                "height": 60
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${config.siteUrl}"
                        },
                        "description": "${description}"
                    }
                `}</script>
      </Helmet>
      <ImageMeta image={shareImage} />
    </>
  );
};

export const websiteMetaQuery = graphql`
  query GhostSettingsWebsiteMeta {
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
  }
`;

const WebsiteMetaQuery = (props: WebsiteMetaProps) => (
  <StaticQuery
    query={websiteMetaQuery}
    render={data => <WebsiteMeta settings={data} {...props} />}
  />
);

export default WebsiteMetaQuery;
