import { FC } from 'react';

import Title from '@modules/common/Title';

import s from './Services.module.scss';

const Services: FC = () => {
	const pageTitle = 'we have solution';
	const pageDescription =
		'We are a web development/design studio dedicated' +
		' to transforming your ideas into captivating digital experiences.';
	const servicesTitle = 'Services';
	const servicesList = [
		'Turn-key website development',
		'Crafting Unique design',
		'Adjustment, launching, and management of your website',
		'Research of user needs for your business',
	];

	return (
		<article className={s.container}>
			<Title color="primary" text={pageTitle} />
			<p className={s.description}>{pageDescription}</p>

			<div className={s.offer}>
				<div>
					<Title size="small" color="primary" text={servicesTitle} />
					<ul className={s.offerList}>
						{servicesList.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<p className={s.offerDescription}>
					At Today-Studio, we specialise in creating bespoke websites tailored
					to your unique business needs. Whether you&apos;re launching a new
					brand, revamping an existing site, or looking to establish an online
					presence, as an expert developers we use the latest technologies to
					bring your vision to life.
					<br />
					<br />
					We prioritize creating interfaces that not only look visually stunning
					but also provide an intuitive and delightful user journey. Our designs
					focus on enhancing usability, accessibility, and overall user
					satisfaction.
					<br />
					<br />
					Our commitment extends to promptly addressing updates, thereby
					ensuring that you maintain a competitive edge in the ever-evolving
					digital landscape.
				</p>
			</div>
		</article>
	);
};

export default Services;
