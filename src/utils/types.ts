export type Tag = {
  name: string;
  slug?: string;
  visibility?: string;
};

type Edge = {
  // @ts-ignore
  node: any;
};

export type AllGhostSettings = {
  edges: Edge[];
};

export type Settings = {
  logo?: object;
  title?: string;
  twitter?: string;
  description?: string;
  cover_image?: string;
  allGhostSettings: AllGhostSettings;
};

export type Page = {
  title?: string;
  meta_title?: string;
  meta_description?: string;
  name?: string;
  feature_image?: string;
  description?: string;
  bio?: string;
  profile_image?: string;
};

export type PageContext = {
  previousPagePath: string;
  nextPagePath: string;
  humanPageNumber?: number;
  numberOfPages?: number;
};

export type Author = {
  name?: string;
  bio?: string;
  profile_image?: string;
  website?: string;
  twitter?: string;
  facebook?: string;
};

export type Post = {
  id: string;
  published_at_pretty?: string;
  slug: string;
  title: string;
  feature_image?: string;
  featured?: boolean;
  tags: Tag[];
  excerpt: string;
  primary_author: Author;
  meta_title?: string;
  meta_description?: string;
  og_title?: string;
  og_description?: string;
  published_at: string;
  updated_at: string;
  twitter_title?: string;
  twitter_description?: string;
};
