import ImageGallery from "./image-slide";


const images = [
  { url: './cover.png' },
  { url: './reapply.png' },
  { url: './cover.png' },
  { url: './reapply.png' },
  // Add more images as needed
];

const HomeImage = () => {
  return (
    <div>
      <div className="w-full h-96 p-5">
        <img src={images[0].url} alt="Main Image" className="w-full h-full object-cover" />
      </div>
      <div className="mt-4">
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default HomeImage;
