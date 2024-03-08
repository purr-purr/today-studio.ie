import s from './Page404.module.scss';

const Page404 = () => {
	return (
		<article className={s.container}>
			<h1 className={s.code}>
				<span>4</span>
				<span>0</span>
				<span>4</span>
			</h1>
			<p className={s.description}>Page not found</p>
		</article>
	);
};
export default Page404;
