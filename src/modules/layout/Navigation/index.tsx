import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Logo from '@modules/common/Logo';

import useLoadingAnimationDelay from '@hooks/useLoadingAnimationDelay';

import s from './Navigation.module.scss';

const Navigation = () => {
	const { pathname } = useRouter();
	const isAnimationFadeIn = useLoadingAnimationDelay();
	const NAVIGATION: string[] = ['Services', 'Projects', 'Contacts'];

	return (
		<ul className={cn(s.container, isAnimationFadeIn && s.fadeIn)}>
			<li className={s.item}>
				<Logo classname={s.link} />
			</li>
			{NAVIGATION.map((item: string) => {
				const navigationPath = `/${item.toLowerCase()}`;
				const title = item === 'Contacts' ? `LET'S TALK` : item.toUpperCase();

				return (
					<li key={item} className={s.item}>
						<Link
							href={navigationPath}
							className={cn(s.link, navigationPath === pathname && s.current)}
						>
							{title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Navigation;
