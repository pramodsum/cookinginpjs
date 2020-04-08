import _ from 'lodash';
import { Author } from '../../../utils/types';

export const getAuthorProperties = (primaryAuthor: Author) => {
  let authorProfiles = [];

  authorProfiles.push(
    primaryAuthor.website ? primaryAuthor.website : null,
    primaryAuthor.twitter
      ? `https://twitter.com/${primaryAuthor.twitter.replace(/^@/, ``)}/`
      : null,
    primaryAuthor.facebook
      ? `https://www.facebook.com/${primaryAuthor.facebook.replace(/^\//, ``)}/`
      : null,
  );

  authorProfiles = _.compact(authorProfiles);

  return {
    name: primaryAuthor.name,
    sameAsArray: `["${_.join(authorProfiles, `", "`)}"]`,
    image: primaryAuthor.profile_image,
    facebookUrl:
      primaryAuthor.facebook &&
      `https://www.facebook.com/${primaryAuthor.facebook.replace(/^\//, ``)}/`,
  };
};

getAuthorProperties.defaultProps = {
  fetchAuthorData: false,
};

export default getAuthorProperties;
