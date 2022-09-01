const imageCache: {
  [key: string]: HTMLImageElement;
} = {};

export async function loadImage(url: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.src = url;

  if (imageCache[url]) return imageCache[url];

  return new Promise((resolve, reject) => {
    image.onload = () => {
      imageCache[url] = image;
      resolve(image);
    };
    image.onerror = () => {
      reject();
    };
  });
}
