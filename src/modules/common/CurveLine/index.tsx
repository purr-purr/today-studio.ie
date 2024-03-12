'use client';

import React, { useEffect, useRef } from 'react';

import s from './CurveLine.module.scss';

interface ISvgPathElement {
	setAttributeNS(
		namespaceURI: null,
		qualifiedName: string,
		value: string,
	): void;
}

const CurveLine = () => {
	const pathElement = useRef<SVGPathElement | null>(null);
	let progress = 0;
	let x = 0.5;
	let time = Math.PI / 2;
	let reqId: number | null = null;

	useEffect(() => {
		pathElement.current && setPath(progress);
	}, []);

	const setPath = (progress: number) => {
		if (pathElement.current) {
			const width = window.innerWidth;
			const value = `M0 50 Q${width * x} ${50 + progress}, ${width} 50`;
			(pathElement.current as ISvgPathElement).setAttributeNS(null, 'd', value);
		}
	};

	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

	const manageMouseEnter = () => {
		if (reqId) {
			cancelAnimationFrame(reqId);
			resetAnimation();
		}
	};

	const manageMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target instanceof HTMLDivElement) {
			const { movementY, clientX } = e;
			const left = pathElement.current?.getBoundingClientRect().left || 0;
			const width = pathElement.current?.getBoundingClientRect().width || 1000;
			x = (clientX - left) / width;
			progress += movementY;
			setPath(progress);
		}
	};

	const manageMouseLeave = () => {
		animateOut();
	};

	const animateOut = () => {
		const newProgress = progress * Math.sin(time);
		progress = lerp(progress, 0, 0.025);
		time += 0.2;
		setPath(newProgress);
		if (Math.abs(progress) > 0.75) {
			reqId = requestAnimationFrame(animateOut);
		} else {
			resetAnimation();
		}
	};

	const resetAnimation = () => {
		time = Math.PI / 2;
		progress = 0;
	};

	return (
		<div className={s.container}>
			<div
				onMouseEnter={manageMouseEnter}
				onMouseLeave={manageMouseLeave}
				onMouseMove={(e) => manageMouseMove(e)}
				className={s.box}
			/>
			<svg>
				<path ref={pathElement} />
			</svg>
		</div>
	);
};

export default CurveLine;
