import s from './CurveLine.module.scss';
import {useEffect, useRef} from "react";

const CurveLine = () => {
	const path = useRef<null>(null);
	let progress = 0;
	let x = 0.5;
	let time = Math.PI / 2;
	let reqId: number | null = null;

	useEffect(() => {
		setPath(progress);
	}, []);

	const setPath = (progress: number) => {
		const width = window.innerWidth;
		if (path.current) {
			path.current.setAttributeNS(null, "d", `M0 50 Q${width * x} ${50 + progress}, ${width} 50`);
		}
	}

	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

	const manageMouseEnter = () => {
		if (reqId) {
			cancelAnimationFrame(reqId);
			resetAnimation();
		}
	}

	const manageMouseMove = (e) => {
		const {movementY, clientX} = e;
		const pathBound = path.current.getBoundingClientRect();
		x = (clientX - pathBound.left) / pathBound.width;
		progress += movementY
		setPath(progress);
	}

	const manageMouseLeave = () => {
		animateOut();
	}

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
	}

	const resetAnimation = () => {
		time = Math.PI / 2;
		progress = 0;
	}

	return (
		<div className={s.line}>
			<div
				onMouseEnter={manageMouseEnter}
				onMouseLeave={manageMouseLeave}
				onMouseMove={(e) => manageMouseMove(e)}
				className={s.box}
			/>
			<svg>
				<path ref={path}/>
			</svg>
		</div>
	);
}

export default CurveLine;