import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Loading from "./Loading/Loading";
import getImageObject from "./limpiadorDeKeys";

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
  });
};

const ResourceLoader = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [resources, setResources] = useState({});

  useEffect(() => {
    const loadResources = async () => {
      try {
        // URLs de las imágenes que deseas precargar
        const imageUrls = [
          "/src/assets/Loading.png",
          "/src/assets/Logo.png",
          "/src/assets/carrousel.png",
          "/src/assets/head1.png",
          "/src/assets/head2.png",
          "/src/assets/isologo.png",
        ];

        // Precargar todas las imágenes
        const loadedImages = await Promise.all(imageUrls.map(preloadImage));

        setResources(getImageObject(imageUrls, loadedImages));

        setIsLoaded(true);
      } catch (error) {
        console.error("Error loading resources", error);
      }
    };

    loadResources();
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }
  const clonedChild = React.cloneElement(children, { resources });
  return <Suspense fallback={<Loading />}>{clonedChild}</Suspense>;
};

export default ResourceLoader;
