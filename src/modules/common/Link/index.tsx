import { FC } from 'react';
import LinkNext from 'next/link';

import s from './Link.module.scss';

const Link: FC<{
	title: string;
	href: string;
}> = ({ title, href }) => {
	return (
		<LinkNext href={href} target="_blank" className={s.container}>
			{title}
		</LinkNext>
	);
};

export default Link;
