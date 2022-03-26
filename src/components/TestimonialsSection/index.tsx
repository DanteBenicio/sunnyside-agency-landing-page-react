import './styles.scss';

import TestimonialCard from './TestimonialCard';
import { testimonialContent1, testimonialContent2, testimonialContent3 } from './TestimonialCard/content';

export default function TestimonialsSection() {
  return (
    <section className="testimonial_section_container">
      <div className="testimonial_section_wrapper">
        <h2 id="testimonial_title">Client Testimonials</h2>
        <div className="testimonials_wrapper">
          <TestimonialCard {...testimonialContent1} />
          <TestimonialCard {...testimonialContent2} />
          <TestimonialCard {...testimonialContent3} />
        </div>
      </div>
    </section>
  );
}
