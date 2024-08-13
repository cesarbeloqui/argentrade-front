import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Loading from "./Loading/Loading";
import getImageObject from "./limpiadorDeKeys";
import Loading1 from "../../assets/Loading.png";
import Logo from "../../assets/Logo.png";
import carrousel from "../../assets/carrousel.png";
import head1 from "../../assets/head1.png";
import isologo from "../../assets/isologo.png";
import chinaSection from "../../assets/chinaSection.jpg";
import contacto from "../../assets/contacto.png";

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
          Loading1,
          Logo,
          carrousel,
          head1,
          isologo,
          chinaSection,
          contacto,
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
