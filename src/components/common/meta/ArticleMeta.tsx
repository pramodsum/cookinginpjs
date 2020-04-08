import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import _ from 'lodash';
import url from 'url';
import getAuthorProperties from './getAuthorProperties';
import ImageMeta from './ImageMeta';
// @ts-ignore
import config from '../../../utils/siteConfig';
import { tags as tagsHelper } from '@tryghost/helpers';

import { Tag, Settings, Post } from '../../../utils/types';

export type ArticleMetaGhostProps = {
  data: Post;
  settings?: Settings;
  canonical: string;
};

const ArticleMetaGhost: React.SFC<ArticleMetaGhostProps> = ({ data, settings, canonical }) => {
  const ghostPost = data;
  const articleSettings = settings.allGhostSettings.edges[0].node;
  const author = getAuthorProperties(ghostPost.primary_author);
  const publicTags = _.map(
    // @ts-ignore
    tagsHelper(ghostPost, { visibility: `public`, fn: (tag: Tag) => tag }),
    `name`,
  );
  const primaryTag = publicTags[0] || ``;
  const shareImage = ghostPost.feature_image
    ? ghostPost.feature_image
    : _.get(settings, `cover_image`, null);
  const publisherLogo =
    articleSettings.logo || config.siteIcon
      ? // @ts-ignore
        url.resolve(config.siteUrl, articleSettings.logo || config.siteIcon)
      : null;
  return (
    <>
      <Helmet>
        <title>{ghostPost.meta_title || ghostPost.title}</title>
        <meta name="description" content={ghostPost.meta_description || ghostPost.excerpt} />
        <link rel="canonical" href={canonical} />

        <meta property="og:site_name" content={articleSettings.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={ghostPost.og_title || ghostPost.meta_title || ghostPost.title}
        />
        <meta
          property="og:description"
          content={ghostPost.og_description || ghostPost.excerpt || ghostPost.meta_description}
        />
        <meta property="og:url" content={canonical} />
        <meta property="article:published_time" content={ghostPost.published_at} />
        <meta property="article:modified_time" content={ghostPost.updated_at} />
        {publicTags.map((keyword, i) => (
          <meta property="article:tag" content={keyword} key={i} />
        ))}
        {author.facebookUrl && <meta property="article:author" content={author.facebookUrl} />}

        <meta
          name="twitter:title"
          content={ghostPost.twitter_title || ghostPost.meta_title || ghostPost.title}
        />
        <meta
          name="twitter:description"
          content={ghostPost.twitter_description || ghostPost.excerpt || ghostPost.meta_description}
        />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={author.name} />
        {primaryTag && <meta name="twitter:label2" content="Filed under" />}
        {primaryTag && <meta name="twitter:data2" content={primaryTag} />}

        {articleSettings.twitter && (
          <meta
            name="twitter:site"
            content={`https://twitter.com/${articleSettings.twitter.replace(/^@/, ``)}/`}
          />
        )}
        {articleSettings.twitter && (
          <meta name="twitter:creator" content={articleSettings.twitter} />
        )}
        <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": "Article",
                        "author": {
                            "@type": "Person",
                            "name": "${author.name}",
                            ${
                              author.image
                                ? author.sameAsArray
                                  ? `"image": "${author.image}",`
                                  : `"image": "${author.image}"`
                                : ``
                            }
                            ${author.sameAsArray ? `"sameAs": ${author.sameAsArray}` : ``}
                        },
                        ${publicTags.length ? `"keywords": "${_.join(publicTags, `, `)}",` : ``}
                        "headline": "${ghostPost.meta_title || ghostPost.title}",
                        "url": "${canonical}",
                        "datePublished": "${ghostPost.published_at}",
                        "dateModified": "${ghostPost.updated_at}",
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
                            "name": "${articleSettings.title}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "${publisherLogo}",
                                "width": 60,
                                "height": 60
                            }
                        },
                        "description": "${ghostPost.meta_description || ghostPost.excerpt}",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${config.siteUrl}"
                        }
                    }
                `}</script>
      </Helmet>
      <ImageMeta image={shareImage} />
    </>
  );
};

const ArticleMetaQuery = (props: ArticleMetaGhostProps) => (
  <StaticQuery
    query={graphql`
      query GhostSettingsArticleMeta {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
      }
    `}
    render={data => <ArticleMetaGhost settings={data} {...props} />}
  />
);

export default ArticleMetaQuery;
