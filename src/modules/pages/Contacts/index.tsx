import {FC} from "react";
import s from "./Contacts.module.scss";
import Title from "@modules/common/Title";
import {COMPANY_INFO} from "@utils/data";
import Link from "@modules/common/Link";
import CurveLine from "@modules/common/CurveLine";

const Contacts: FC = () => {
	const pageTitle = 'Let\'s Connect today';
	const pageDescription = 'Get in touch to kickstart your digital journey. Let\'s build something remarkable together!';
	const location = `Based in ${COMPANY_INFO.LOCATION}`;

	const contactsList = [
		{title: 'Start a project', link: `mailto:${COMPANY_INFO.EMAIL}`},
		{title: 'Connect via WhatsApp', link: `tel:${COMPANY_INFO.WHATSAPP}`},
		{title: 'Check our LinkedIn', link: COMPANY_INFO.LINKEDIN},
	]
	return (
		<article className={s.container}>
			<Title classname={s.heading} color="primary" text={pageTitle}/>

			<CurveLine/>
			
			<aside className={s.contacts}>
				<p className={s.description}>{pageDescription}</p>
				<ul className={s.contactsList}>
					{contactsList.map(item => (
						<li key={item.link}>
							<Link href={item.link} title={item.title}/>
						</li>
					))}
				</ul>
				<p className={s.contactsLocation}>{location}</p>
			</aside>
		</article>
	);
};

export default Contacts;
