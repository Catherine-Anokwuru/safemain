import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "./Item";
import Slider from "react-slick";
import About from "../about/About";
import Image from "../image/image";
import Values from "../values/Values";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };
  return (
    <>
      <section className="carousel" id="home">
        <Slider {...settings}>
          {list.map((item) => {
            const { id, image, title } = item;
            return (
              <article key={id} className="">
                <img src={image} alt="hero image" />
                <div className="carousel-bg">
                  <h5>{title}</h5>
                </div>
                {/* <FaQuoteRight className="icon" /> */}
              </article>
            );
          })}
        </Slider>
      </section>
      <About />
      <Image />
      <Values key="values" />
    </>
  );
};
export default Carousel;
