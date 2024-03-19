import {FC, useEffect, useRef, useState} from 'react';
import cn from 'classnames';

import {CATCH_WORDS, COMPANY_INFO} from '@utils/data';

import s from './HomeTicker.module.scss';
import {LAPTOP_BREAKPOINT, MOBILE_BREAKPOINT} from "@utils/const";
import {useMediaQuery} from "@hooks/index";

const HomeTicker: FC<{ isFadeIn?: boolean }> = ({ isFadeIn }) => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const marginTopStep = isMobile ? 50 : isLaptop ? 80 : 100;
	const tickerRef = useRef<HTMLUListElement | null>(null);
	const [marginTop, setMarginTop] = useState(0);
	const [currentElement, setCurrentElement] = useState(0);
	const [triggerTicker, setTriggerTicker] = useState<boolean>(false);

	const tick = () => {
		const ticker = tickerRef.current;
		let getNode: Node | null = null;

		if (ticker) {
			const list = tickerRef.current?.children;
			const nodesArray = list && Object.values(list);

			nodesArray?.forEach(
				(item, index) =>
					(getNode =
						index === currentElement
							? ticker.children[index].cloneNode(true)
							: getNode),
			);

			getNode && ticker.appendChild(getNode);
			setMarginTop((prev) => prev + marginTopStep);
			setCurrentElement((prev) => prev + 1);
			ticker.style.marginTop = `-${marginTop}px`;
		}
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTriggerTicker(true);
		}, 4000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		if (isFadeIn && triggerTicker) {
			tick();
			setTriggerTicker(false);
		}
	}, [triggerTicker]);

	const catchWords = [`${COMPANY_INFO.TYPE.toLowerCase()}`, ...CATCH_WORDS];

	return (
			<ul
				ref={tickerRef}
				className={cn(s.container, isFadeIn && s.fadeIn)}
				// style={{ marginTop: `-${160 + 80}px` }}
			>
				{catchWords.map((item: string) => (
					<li key={item}>{item}</li>
				))}
			</ul>

	);
};

export default HomeTicker;
