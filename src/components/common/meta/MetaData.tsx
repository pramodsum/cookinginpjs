import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import url from 'url';
// @ts-ignore
import config from '../../../utils/siteConfig';
import ArticleMeta from './ArticleMeta';
import WebsiteMeta from './WebsiteMeta';
import AuthorMeta from './AuthorMeta';
import { Tag, Settings, Page, Post, Author } from '../../../utils/types';

export type MetaDataProps = {
  data?: {
    ghostPost?: Post;
    ghostTag?: Tag;
    ghostAuthor?: Author;
    ghostPage?: Page;
    shopifyProduct?: any;
  };
  settings?: Settings;
  location: {
    pathname: string;
  };
  title?: string;
  description?: string;
  image?: string;
  type?: string;
};

const MetaData: React.SFC<MetaDataProps> = ({
  data,
  settings,
  title,
  description,
  image,
  location,
}) => {
  if (!data) {
    return null;
  }

  const canonical = url.resolve(config.siteUrl, location.pathname);
  const { ghostPost, ghostTag, ghostAuthor, ghostPage } = data;
  settings = settings.allGhostSettings.edges[0].node;

  if (ghostPost) {
    return <ArticleMeta data={ghostPost} canonical={canonical} />;
  } else if (ghostTag) {
    return <WebsiteMeta data={ghostTag} canonical={canonical} type="Series" />;
  } else if (ghostAuthor) {
    return <AuthorMeta data={ghostAuthor} canonical={canonical} />;
  } else if (ghostPage) {
    return <WebsiteMeta data={ghostPage} canonical={canonical} type="WebSite" />;
  } else {
    title = title || config.siteTitleMeta || settings.title;
    description = description || config.siteDescriptionMeta || settings.description;
    image = image || settings.cover_image;
    image = image && url.resolve(config.siteUrl, image);

    return (
      <WebsiteMeta
        data={{}}
        canonical={canonical}
        title={title}
        description={description}
        image={image}
        type="WebSite"
      />
    );
  }
};

export const metadataQuery = graphql`
  query GhostSettingsMetaData {
    allGhostSettings {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`;

const MetaDataQuery = (props: MetaDataProps) => (
  <StaticQuery query={metadataQuery} render={data => <MetaData settings={data} {...props} />} />
);

export default MetaDataQuery;
