import {FC} from 'react';
import Link from 'next/link';

import s from './Logo.module.scss';
import {COMPANY_INFO} from "@utils/data";

const Logo: FC = () => {
	return (
		<Link className={s.container} href="/">
			{COMPANY_INFO.NAME.toUpperCase()}
		</Link>
	);
};

export default Logo;
