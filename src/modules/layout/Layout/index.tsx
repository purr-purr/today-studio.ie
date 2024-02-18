import s from "./Layout.module.scss";
import Header from "@modules/layout/Header";
import React, {
	ReactNode,
} from "react";
import Drawing from "@modules/layout/Layout/components/Drawing";

interface IChildrenProps {
	children: ReactNode;
}

const Layout = ({children}: IChildrenProps) => {
	return (
		<main className={s.container}>
			<Header/>
			<section className={s.content}>
				{children}
				<Drawing/>
			</section>
		</main>
	);
};

export default Layout;
