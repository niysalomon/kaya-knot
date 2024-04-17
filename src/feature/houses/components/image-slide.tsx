import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.min.css';

const ImageGallery = ({ images }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={7}
      navigation
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.url} alt={`Image ${index}`} className="w-full h-auto cursor-pointer" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageGallery;
