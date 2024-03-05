import Navigation from '@modules/layout/Navigation';

import s from './Header.module.scss';

const Header = () => {
	return (
		<header className={s.container}>
			<Navigation />
		</header>
	);
};

export default Header;
