import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const useLoadingAnimationDelay = () => {
	const { pathname } = useRouter();
	const [isAnimationStarting, setIsAnimationStarting] = useState(false);

	useEffect(() => {
		if (pathname === '/') {
			const timeout = window.setTimeout(() => {
				setIsAnimationStarting(true);
			}, 1000);

			return () => clearTimeout(timeout);
		} else {
			setIsAnimationStarting(true);
		}
	}, []);

	return isAnimationStarting;
};

export default useLoadingAnimationDelay;
