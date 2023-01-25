import { useRef } from "react";
import {
  useGsapGalleryTitle,
  useGsapGalleryCategory,
  useGsapGalleryImage,
} from "../hooks/gspa";

const GalleryItem = ({ image }) => {
  const galleryTitleRef = useRef(null);
  const galleryCategoryRef = useRef(null);
  const galleryimageRef = useRef(null);

  useGsapGalleryTitle(galleryTitleRef, galleryimageRef);
  useGsapGalleryCategory(galleryCategoryRef, galleryimageRef);
  useGsapGalleryImage(galleryimageRef);
  return (
    <div className="gallery-item">
      <h1 className="gallery-item-title" ref={galleryTitleRef}>
        {image.title}
      </h1>
      <p className="gallery-item-category" ref={galleryCategoryRef}>
        {image.category}
      </p>
      <div
        ref={galleryimageRef}
        className="gallery-item-img"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    </div>
  );
};

export default GalleryItem;
