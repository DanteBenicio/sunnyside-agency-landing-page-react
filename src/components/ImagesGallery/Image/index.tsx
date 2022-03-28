import './styles.scss';
import { ImageInfo } from '../../../types/image';

export default function Image({ altImg, desktopImgSrc, mobileImgSrc }: ImageInfo) {
  return (
    <>
      <img src={desktopImgSrc} alt={altImg} id="desktop" className="img" />
      <img src={mobileImgSrc} alt={altImg} id="mobile" className="img" />
    </>
  );
}
