import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { IPost } from "../types/interfaces";
import styles from "./carousel.module.css";
import Slider from "react-slick";

interface ICarousel {
  carouselPosts: IPost[];
}

const PostCarousel: React.FC<ICarousel> = ({ carouselPosts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {!!carouselPosts?.length &&
          carouselPosts.map((item, index) => (
            <Link href={`/eventos/${item.slug}`} key={index}>
              <ImageListItem
                component="div"
                classes={{
                  root: styles.rootItem,
                }}
              >
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={item.image}
                  alt={item.title}
                />
                <ImageListItemBar
                  classes={{
                    root: styles.titleBar,
                    title: styles.title,
                    subtitle: styles.subtitle,
                  }}
                  title={item.title}
                  subtitle={item.description}
                />
              </ImageListItem>
            </Link>
          ))}
      </Slider>
    </div>
  );
};

export default PostCarousel;
