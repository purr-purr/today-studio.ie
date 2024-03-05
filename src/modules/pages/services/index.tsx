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
		'Built-for-you websites',
		'Personalised design & copy',
		'Fast loading to rank high on Google',
		'Secure hosting & SSL certificate',
		'Easy-to-use data editor',
		'1-to-1 launch & training call',
		'Custom domain name',
		'Unlimited edits for 30 days post launch',
	];

	return (
		<article className={s.container}>
			<Title color="primary" text={pageTitle} />
			<p className={s.description}>{pageDescription}</p>

			<div className={s.services}>
				<div>
					<Title size="small" color="primary" text={servicesTitle} />
					<ul className={s.servicesList}>
						{servicesList.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<p className={s.servicesDescription}>
					At Today-Studio, we specialise in creating bespoke websites tailored to
					your unique business needs. Whether you&apos;re launching a new brand,
					revamping an existing site, or looking to establish an online presence, as
					an expert developers we use the latest technologies to bring your vision to
					life.
					<br />
					<br />
					We prioritize creating interfaces that not only look visually stunning but
					also provide an intuitive and delightful user journey. Our designs focus on
					enhancing usability, accessibility, and overall user satisfaction.
					<br />
					<br />
					Our commitment extends to promptly addressing updates, thereby ensuring
					that you maintain a competitive edge in the ever-evolving digital
					landscape.
				</p>
			</div>
		</article>
	);
};

export default Services;
