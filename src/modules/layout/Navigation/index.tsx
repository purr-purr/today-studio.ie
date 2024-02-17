import Link from 'next/link';
import {useRouter} from 'next/router';
import cn from 'classnames';

import s from './Navigation.module.scss';

const Navigation = () => {
	const {pathname} = useRouter();
	const NAVIGATION: string[] = ['About', 'Projects', 'Contacts'];

	return (
		<ul className={s.container}>
			{NAVIGATION.map((item: string) => {
				const navigationPath = `/${item.toLowerCase()}`;
				const title = item.toUpperCase();

				return <li key={item}>
					<Link
						href={navigationPath}
						className={cn(s.item, navigationPath === pathname && s.current)}
					>
						{title}
					</Link>
				</li>
			})}
		</ul>
	);
};

export default Navigation;
