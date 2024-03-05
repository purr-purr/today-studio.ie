import { FC } from 'react';

import CurveLine from '@modules/common/CurveLine';
import Link from '@modules/common/Link';
import Title from '@modules/common/Title';

import { COMPANY_INFO } from '@utils/data';

import s from './Contacts.module.scss';

const Contacts: FC = () => {
	const pageTitle = "Let's Connect today";
	const pageDescription =
		"Get in touch to kickstart your digital journey. Let's build something remarkable together!";
	const contactsList = [
		{ title: 'Start a project', link: `mailto:${COMPANY_INFO.EMAIL}` },
		{ title: 'Connect via WhatsApp', link: `tel:${COMPANY_INFO.WHATSAPP}` },
		{ title: 'Check our LinkedIn', link: COMPANY_INFO.LINKEDIN },
	];
	return (
		<article className={s.container}>
			<Title classname={s.heading} color="primary" text={pageTitle} />

			<CurveLine />

			<aside className={s.contacts}>
				<p className={s.description}>{pageDescription}</p>
				<ul className={s.contactsList}>
					{contactsList.map((item) => (
						<li key={item.link}>
							<Link href={item.link} title={item.title} />
						</li>
					))}
				</ul>
			</aside>
		</article>
	);
};

export default Contacts;
