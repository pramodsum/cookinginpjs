import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';
import { StaticQuery, graphql } from 'gatsby';
import ImageMeta from './ImageMeta';
import getAuthorProperties from './getAuthorProperties';
// @ts-ignore
import config from '../../../utils/siteConfig';
import { Author, Settings } from '../../../utils/types';

export type AuthorMetaProps = {
  data: Author;
  settings?: Settings;
  canonical: string;
};

const AuthorMeta: React.SFC<AuthorMetaProps> = ({ data, settings, canonical }) => {
  settings = settings?.allGhostSettings.edges[0].node;
  const author = getAuthorProperties(data);
  const shareImage = author.image || _.get(settings, `cover_image`, null);
  const title = `${data.name} - ${settings?.title}`;
  const description = data.bio || config.siteDescriptionMeta || setting?s.description;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={settings?.title} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        {settings?.twitter && (
          <meta
            name="twitter:site"
            content={`https://twitter.com/${settings?.twitter.replace(/^@/, ``)}/`}
          />
        )}
        {settings?.twitter && <meta name="twitter:creator" content={settings?.twitter} />}
        <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": "Person",
                        "name": "${data.name}",
                        ${author.sameAsArray ? `"sameAs": ${author.sameAsArray},` : ``}
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

const AuthorMetaQuery = (props: AuthorMetaProps) => (
  <StaticQuery
    query={graphql`
      query GhostSettingsAuthorMeta {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
      }
    `}
    render={data => <AuthorMeta settings={data} {...props} />}
  />
);

export default AuthorMetaQuery;
