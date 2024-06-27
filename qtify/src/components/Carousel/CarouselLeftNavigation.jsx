import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import styles from "./Carousel.module.css";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";

const CarouselLeft = () => {
	const swiper = useSwiper();

	const [isBegin, setIsBegin] = useState(true); 

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsBegin(swiper.isBeginning); 
		});
	}, [swiper]); 

	return (
		<div className={styles.leftNav}>
			{!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} />}
		</div>
	);
};

export default CarouselLeft;