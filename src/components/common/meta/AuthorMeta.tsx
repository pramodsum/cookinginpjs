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

const AuthorMeta: React.FC<AuthorMetaProps> = ({ data, settings, canonical }) => {
  const authorSettings = settings.allGhostSettings.edges[0].node;
  const author = getAuthorProperties(data);
  const shareImage = author.image || _.get(authorSettings, `cover_image`, null);
  const title = `${data.name} - ${authorSettings.title}`;
  const description = data.bio || config.siteDescriptionMeta || authorSettings.description;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={authorSettings.title} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        {authorSettings.twitter && (
          <meta
            name="twitter:site"
            content={`https://twitter.com/${authorSettings.twitter.replace(/^@/, ``)}/`}
          />
        )}
        {authorSettings.twitter && <meta name="twitter:creator" content={authorSettings.twitter} />}
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

export const authorMetaQuery = graphql`
  query GhostSettingsAuthorMeta {
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

const AuthorMetaQuery = (props: AuthorMetaProps) => (
  <StaticQuery query={authorMetaQuery} render={data => <AuthorMeta settings={data} {...props} />} />
);

export default AuthorMetaQuery;
