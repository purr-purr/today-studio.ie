import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { COMPANY_INFO } from '@utils/data';

import s from './Logo.module.scss';

const Logo: FC<{ classname?: string }> = ({ classname }) => {
	return (
		<Link className={cn(classname, s.container)} href="/">
			{COMPANY_INFO.NAME.toUpperCase()}
		</Link>
	);
};

export default Logo;
