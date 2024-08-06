export default function getImageObject(urls, loadedUrls) {
  return urls.reduce((acc, url, index) => {
    const fileName = url.split("/").pop().split(".")[0];
    acc[fileName] = loadedUrls[index];
    return acc;
  }, {});
}
