import {FC, useEffect, useState} from "react";
import {COMPANY_INFO} from "@utils/data";
import Ticker from "@modules/pages/home/components/Ticker";

import s from "./Home.module.scss";
import cn from "classnames";
import useLoadingAnimationDelay from "@hooks/useLoadingAnimationDelay";

const Home: FC = () => {
	const [isHeadingFadeRight, setIsHeadingFadeRight] = useState(false);
	const [tickerFadeIn, setTickerFadeIn] = useState(false);
	const isAnimationFadeIn = useLoadingAnimationDelay();

	const handleTickerFadeIn = () => {
		setTimeout(() => {
			setTickerFadeIn(true);
		}, 500);
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsHeadingFadeRight(true);
			handleTickerFadeIn();
		}, 2000);

		return () => clearInterval(timeoutId);
	}, []);

	return (
		<article className={s.container}>
			<div className={s.inner}>
				<div className={cn(s.heading, isHeadingFadeRight && s.fadeRight)}>
					<h1 className={cn(s.title, isAnimationFadeIn && s.fadeIn)}>
						{COMPANY_INFO.NAME.toUpperCase()}
					</h1>

					<Ticker isFadeIn={tickerFadeIn}/>
				</div>
			</div>
		</article>
	);
};

export default Home;
