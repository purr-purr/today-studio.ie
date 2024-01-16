import Header from "../Header";
import {FC, type ReactNode} from "react";

const Layout:FC<{children: ReactNode}> = ({children}) => {
	return (
		<main>
			layout
			<Header />
			{children}
		</main>
	);
}

export default Layout;