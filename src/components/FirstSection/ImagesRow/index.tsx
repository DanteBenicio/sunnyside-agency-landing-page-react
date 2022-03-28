import './styles.scss';

export default function ImagesRow() {
  return (
    <section className="imagesrow_container">
      <div className="imagesrow_image_wrapper">
        <img src="assets/desktop/image-graphic-design.jpg" alt="baby blue background with two cherries" aria-hidden="true" className="desktop_img" />
        <div className="image_content">
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that underscores
            your brand message and captures potential clients attention.
          </p>
        </div>
      </div>
      <div className="imagesrow_image_wrapper">
        <img src="assets/desktop/image-photography.jpg" alt="blue background with an orange" aria-hidden="true" />
        <div className="image_content">
          <h3>Graphic Design</h3>
          <p>
            Increase your credibility by getting the most stunning,
            high-quality photos that improve your busines image.
          </p>
        </div>
      </div>
    </section>
  );
}
