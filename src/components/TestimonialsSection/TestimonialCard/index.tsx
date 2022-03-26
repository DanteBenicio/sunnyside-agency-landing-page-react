import './styles.scss';

import { TestimonialContent } from '../../../types/testimonial';

export default function TestimonialCard({
  altImg, imgSrc, description, name, role,
}: TestimonialContent) {
  return (
    <article className="testimonial_wrapper">
      <div className="testimonial_image_wrapper">
        <img src={imgSrc} alt={altImg} width="80" height="80" />
      </div>
      <p>{description}</p>
      <div className="testimonial_info">
        <span id="name">{name}</span>
        <span id="role">{role}</span>
      </div>
    </article>
  );
}
