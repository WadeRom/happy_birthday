import { useState, useEffect } from "react";
import { allImages } from "../utils/importAllImages";

export const useLoadImages = (dependencies = []) => {
  const [images, setImages] = useState({
    urls: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await allImages();
      setImages({ urls: urls, isLoading: false });
    };

    fetchImages();
  }, dependencies);

  return images;
}