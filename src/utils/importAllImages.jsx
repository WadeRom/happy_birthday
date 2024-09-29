const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}');

export const allImages = async () => {
  const imageUrls = [];

  const promises = Object.keys(images).map(async (path) => {
    if (path.includes('vangogh_portrait.webp')) return null;
    const mod = await images[path]();
    imageUrls.push(mod.default);
  });
  
  await Promise.all(promises);

  imageUrls.sort((a, b) => {
    
    const numA = parseInt(a.match(/\d+/)[0], 10);
    const numB = parseInt(b.match(/\d+/)[0], 10);

    return numA - numB;
  });

  return imageUrls;
};
