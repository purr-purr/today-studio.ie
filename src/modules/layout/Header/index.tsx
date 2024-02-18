import s from "./Header.module.scss";
import Navigation from "@modules/layout/Navigation";

const Header = () => {
	return (
		<header className={s.container}>
			<Navigation/>
		</header>
	);
};

export default Header;
