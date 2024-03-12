import { createElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Logo from '@modules/common/Logo';

import { useMediaQuery } from '@hooks/index';
import useLoadingAnimationDelay from '@hooks/useLoadingAnimationDelay';
import { MOBILE_BREAKPOINT } from '@utils/const';

import s from './Header.module.scss';

const Header = () => {
	const { pathname } = useRouter();
	const isAnimationFadeIn = useLoadingAnimationDelay();
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const navigationList: string[] = ['services', 'projects', 'contacts'];

	const mobileLogo = <Logo classname={s.item} />;
	const desktopLogo = (
		<Logo classname={cn(s.item, s.itemDesktop, s[`itemDesktop--logo`])} />
	);

	const logoElement = isMobile
		? createElement(
				'div',
				{
					className: s.mobileLogo,
				},
				mobileLogo,
			)
		: desktopLogo;

	return (
		<header className={cn(s.container, isAnimationFadeIn && s.fadeIn)}>
			{logoElement}
			<nav className={cn(isMobile && s.mobileNav)}>
				{navigationList.map((item: string, index: number) => {
					const navigationPath = `/${item}`;
					const title = item === 'Contacts' ? `LET'S TALK` : item.toUpperCase();

					return (
						<Link
							key={item}
							href={navigationPath}
							className={cn(
								s.item,
								!isMobile && [s.itemDesktop, s[`itemDesktop--${index + 1}`]],
								navigationPath === pathname && s.current,
							)}
						>
							{title}
						</Link>
					);
				})}
			</nav>
		</header>
	);
};

export default Header;
