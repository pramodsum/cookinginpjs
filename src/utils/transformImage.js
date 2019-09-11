var URL = require(`url`).URL;

function transformImage(urlStr) {
  const url = new URL(urlStr);
  if (url.protocol === `http:`) {
    return `https:` + url.host + url.pathname;
  }
  return urlStr;
}

export default transformImage;
