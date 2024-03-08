import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { motion } from 'framer-motion';

import type { IProjectsList } from '@modules/pages/projects/interface';

import s from './ProjectItem.module.scss';

const ProjectItem: FC<{ project: IProjectsList }> = ({ project }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const getPosterPath = (path: string) => {
		return require(`@modules/pages/projects/assets/${path}.jpg`).default;
	};

	const animation = {
		initial: { width: 0 },
		open: {
			width: 'auto',
			transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
		},
		closed: { width: 0 },
	};

	return (
		<li
			onMouseEnter={() => {
				setIsActive(true);
			}}
			onMouseLeave={() => {
				setIsActive(false);
			}}
			className={s.container}
		>
			<Link href={project.link} className={s.link}>
				<p
					className={cn(
						s.title,
						project.isWithSeparator && !isActive && s[`title--active`],
					)}
				>
					{project.titleFirstPart}
				</p>
				<motion.div
					variants={animation}
					animate={isActive ? 'open' : 'closed'}
					className={s.poster}
				>
					<Image
						className={s.posterImage}
						alt="Poster"
						src={getPosterPath(project.titleFirstPart)}
					/>
				</motion.div>
				<p className={s.title}>{project.titleLastPart}</p>
			</Link>
		</li>
	);
};

export default ProjectItem;
