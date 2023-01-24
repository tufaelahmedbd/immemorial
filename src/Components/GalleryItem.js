const GalleryItem = ({ image }) => {
  return (
    <div className="gallery-item">
      <h1 className="gallery-item-title">{image.title}</h1>
      <p className="gallery-item-category">{image.category}</p>
      <div
        className="gallery-item-img"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    </div>
  );
};

export default GalleryItem;
