import {FC, useEffect, useRef, useState} from 'react';

import s from './Ticker.module.scss';
import {CATCH_WORDS, COMPANY_INFO} from "@utils/data";
import cn from "classnames";

const Ticker: FC<{ isFadeIn?: boolean }> = ({isFadeIn}) => {
	const tickerRef = useRef<HTMLUListElement | null>(null);
	const [marginTop, setMarginTop] = useState(-100);
	const [currentElement, setCurrentElement] = useState(0);
	const [triggerTicker, setTriggerTicker] = useState<boolean>(false);

	const tick = () => {
		const ticker = tickerRef.current;
		let getNode: Node | null = null;

		if (ticker) {
			const list = tickerRef.current?.children;
			const nodesArray = Object.values(list);

			nodesArray.forEach((item, index) =>
				getNode = index === currentElement
					? ticker.children[index].cloneNode(true)
					: getNode);

			getNode && ticker.appendChild(getNode);
			setMarginTop((prev) => prev - 100);
			setCurrentElement((prev) => prev + 1);
			ticker.style.marginTop = `${marginTop}px`;
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

	const catchWords = [
		`${COMPANY_INFO.TYPE.toLowerCase()}`,
		...CATCH_WORDS
	];

	return (
		<ul
			ref={tickerRef}
			className={cn(s.container, isFadeIn && s.fadeIn)}
		>
			{catchWords.map((item: string) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}

export default Ticker;
