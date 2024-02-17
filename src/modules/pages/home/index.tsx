import {FC, Fragment} from 'react';

import {COMPANY_INFO} from "@utils/data";

import s from './Home.module.scss';
import cn from "classnames";

const Home: FC = () => {
	const catchWords = [
		`${COMPANY_INFO.TYPE.toLowerCase()}`,
		'will be sunny',
		'brings possibilities',
		'time to improve your business',
		'the best day for change',
		'we have solution'
	]

	return (
		<article className={s.container}>
			<div className={s.inner}>
				<div className={s.heading}>
					<h1>{COMPANY_INFO.NAME.toUpperCase()}</h1>
					<p className={s.description}>
						{catchWords.map((item: string) => (
							<Fragment key={item}>
								{item}
								{<br/>}
							</Fragment>
						))}
					</p>
				</div>
			</div>
		</article>
	);
}

export default Home;
