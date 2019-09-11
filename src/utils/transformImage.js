export default function transformImage(url) {
  return url.replace(/^http:\/\//i, 'https://');
}
