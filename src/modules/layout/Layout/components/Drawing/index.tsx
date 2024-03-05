import { useEffect, useRef } from 'react';

import s from './Drawing.module.scss';

const Drawing = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	let coords = { x: 0, y: 0 };

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const ctx = canvas.getContext('2d');
			if (ctx) {
				ctxRef.current = ctx;
				resizeCanvas();
				window.addEventListener('resize', resizeCanvas);
			}
		}

		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	}, []);

	const resizeCanvas = () => {
		const canvas = canvasRef.current;
		const ctx = ctxRef.current;
		if (canvas && ctx) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
	};

	const reposition = (x: number, y: number) => {
		const canvas = canvasRef.current;
		if (canvas) {
			coords.x = x - canvas.offsetLeft;
			coords.y = y - canvas.offsetTop;
		}
	};

	const start = (x: number, y: number) => {
		document.addEventListener('mousemove', draw);
		reposition(x, y);
	};

	const stop = () => {
		document.removeEventListener('mousemove', draw);
	};

	const draw = (event: MouseEvent) => {
		const ctx = ctxRef.current;
		if (ctx) {
			event.preventDefault();
			ctx.beginPath();
			ctx.lineWidth = 0.2;
			ctx.lineCap = 'round';
			ctx.strokeStyle = '#0036C1';
			ctx.moveTo(coords.x, coords.y);
			reposition(event.clientX, event.clientY);
			ctx.lineTo(coords.x, coords.y);
			ctx.stroke();
		}
	};

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			start(event.clientX, event.clientY);
			window.removeEventListener('mousemove', handleMouseMove);
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			stop();
		};
	}, []);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		console.log('Page was scrolled');
	// 	};
	//
	// 	window.addEventListener('scroll', handleScroll);
	//
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	return <canvas ref={canvasRef} className={s.container} />;
};

export default Drawing;
