import {type ReactNode} from 'react';

import Header from '@modules/layout/Header';

import s from './Layout.module.scss';

interface IChildrenProps {
	children: ReactNode;
}

const Layout = ({children}: IChildrenProps) => {
	return (
		<main className={s.container}>
			<Header/>
			<section className={s.content}>
				{children}
			</section>
		</main>
	);
};

export default Layout;
