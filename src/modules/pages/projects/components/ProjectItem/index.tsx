import {FC, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import {motion} from 'framer-motion';

import type {IProjectsList} from '@modules/pages/projects/interface';

import s from './ProjectItem.module.scss';
import {useMediaQuery} from "@hooks/index";
import {MOBILE_BREAKPOINT} from "@utils/const";

const ProjectItem: FC<{ project: IProjectsList }> = ({ project }) => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
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
			onMouseEnter={() =>
				!isActive && setIsActive(true)
			}
			onMouseLeave={() =>
				isActive && setIsActive(false)
			}
			className={s.container}
		>
			<Link href={project.link} className={s.link} target="_blank">
				<p
					className={cn(
						s.title,
						project.isWithSeparator && !isActive && s[`title--separator`],
					)}
				>
					{project.titleFirstPart}
				</p>
				{!isMobile && (
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
				)}
				<p className={cn(
					s.title,
					project.isWithSeparator && !isActive && s[`title--separator`],
				)}>{project.titleLastPart}</p>
			</Link>
		</li>
	);
};

export default ProjectItem;
