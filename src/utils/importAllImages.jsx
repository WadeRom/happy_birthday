const images = import.meta.glob('../assets/images/*.webp');

const  formatPath = (path) => {
  let formattedPath = path.replace(/\.webp$/, '');
  formattedPath = formattedPath.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  return formattedPath;
}

export const allImages = async () => {
  const imageUrls = [];

  const promises = Object.keys(images).map(async (path) => {
    if (path.includes('vangogh_portrait.webp')) return null;
    
    const mod = await images[path]();
    const splitMod = [...mod.default.split('/')];
  
    imageUrls.push({
      url: mod.default,
      alt: formatPath(splitMod[splitMod.length - 1]),
    });
  });
  
  await Promise.all(promises);

  return imageUrls;
};
