import './styles.scss';
import { IContentRowProps } from '../../../types/content-row';

export default function ContentRow({
  rowReverse, title, description, desktopImgSrc, mobileImgSrc, altSrc, learnMoreColor,
}: IContentRowProps) {
  return (
    <section className={`contentrow_container ${rowReverse ? 'row_reverse' : ''}`}>
      <div className="contentrow_wrapper text_content_container">
        <div className="text_content_wrapper">
          <h2>{title}</h2>
          <p>{description}</p>
          <span
            className={learnMoreColor === 'yellow' ? 'yellow' : 'crimson'}
          >
            Learn More
          </span>
        </div>
      </div>
      <div className="contentrow_wrapper image_wrapper">
        <img src={desktopImgSrc} alt={altSrc} className="image_desktop" aria-hidden="true" />
        <img src={mobileImgSrc} alt={altSrc} className="image_mobile" aria-hidden="true" />
      </div>
    </section>
  );
}

ContentRow.defaultProps = {
  rowReverse: false,
};
