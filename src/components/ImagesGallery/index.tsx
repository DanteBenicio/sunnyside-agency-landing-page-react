import { images } from './Image/content';
import Image from './Image';
import './styles.scss';

export default function GalleryImages() {
  return (
    <section className="gallery_images_section">
      <div className="gallery_images_wrapper">
        {images.map(({ desktopImgSrc, mobileImgSrc, altImg }) => (
          <Image
            key={desktopImgSrc}
            desktopImgSrc={desktopImgSrc}
            mobileImgSrc={mobileImgSrc}
            altImg={altImg}
          />
        ))}
      </div>
    </section>
  );
}
