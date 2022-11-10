import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.css";
interface IPartnerSlider {
  partnerList: { name: string; image: string }[];
}

const PartnerSlider: React.FC<IPartnerSlider> = ({ partnerList }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      {!!partnerList?.length &&
        partnerList.map((partner) => (
          <div className={styles.sliderItem} key={partner.name}>
            <img src={partner.image} alt={partner.name} />
          </div>
        ))}
    </Slider>
  );
};

export default PartnerSlider;
