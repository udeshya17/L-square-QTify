import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import CarouselLeft from "./CarouselLeftNavigation";
import CarouselRight from "./CarouselRightNavigation";
import { useEffect } from "react";

const Controls = ({ data }) => {
	const swiper = useSwiper();

	useEffect(() => {
		swiper.slideTo(0);
	}, [data]);

	return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
	return (
		<div className={styles.container}>
			<Swiper
				initialSlide={0}
				modules={{ Navigation }}
				slidesPerView={"auto"}
				spaceBetween={10}
				allowTouchMove>
				<Controls data={data} />
				<CarouselLeft />
				<CarouselRight/>
				{data.map((item) => (
					<SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;