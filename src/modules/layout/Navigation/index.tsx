import s from "./Navigation.module.scss";
import cn from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import Logo from "@modules/common/Logo";
import useLoadingAnimationDelay from "@hooks/useLoadingAnimationDelay";

const Navigation = () => {
	const {pathname} = useRouter();
	const isAnimationFadeIn = useLoadingAnimationDelay();
	const NAVIGATION: string[] = ["About", "Projects", "Contacts"];

	return (
		<ul className={cn(s.container, isAnimationFadeIn && s.fadeIn)}>
			<li className={s.item}>
				<Logo classname={s.link}/>
			</li>
			{NAVIGATION.map((item: string) => {
				const navigationPath = `/${item.toLowerCase()}`;
				const title = item.toUpperCase();

				return (
					<li key={item} className={s.item}>
						<Link
							href={navigationPath}
							className={cn(s.link, navigationPath === pathname && s.current)}
						>
							{title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Navigation;
