import {formatNavigationToPath, NAVIGATION} from "../../../utils/data";
import s from './Navigation.module.scss';

const Navigation = () => {
	return (
		<nav className={s.container}>
			<ul>
				{NAVIGATION.map((item: string) => (
					<li>
						<a href={formatNavigationToPath(item)}>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navigation;