import React, { ReactNode } from 'react';

import Header from '@modules/layout/Header';
import Drawing from '@modules/layout/Layout/components/Drawing';

import s from './Layout.module.scss';

interface IChildrenProps {
	children: ReactNode;
}

const Layout = ({ children }: IChildrenProps) => {
	return (
		<main className={s.container}>
			<Header />
			<section className={s.content}>
				{children}
				<Drawing />
			</section>
		</main>
	);
};

export default Layout;
