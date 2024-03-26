import {type ReactNode} from 'react';

import Header from '@modules/layout/Header';
import Drawing from '@modules/layout/Layout/components/Drawing';

import {useMediaQuery} from '@hooks/index';
import {MOBILE_BREAKPOINT} from '@utils/const';

import s from './Layout.module.scss';
import {useRouter} from "next/router";

interface IChildrenProps {
	children: ReactNode;
}

const Layout = ({ children }: IChildrenProps) => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const { pathname } = useRouter();
	const isDrawingActive = pathname === '/' && !isMobile;

	return (
		<main className={s.container}>
			<Header />
			<section className={s.content}>{children}</section>
			{isDrawingActive && <Drawing />}
		</main>
	);
};

export default Layout;
