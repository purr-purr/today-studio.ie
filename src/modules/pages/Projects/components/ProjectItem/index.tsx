'use client'

import {motion} from 'framer-motion';
import {FC, useEffect, useState} from 'react';
import s from './ProjectItem.module.scss';
import Image from "next/image";
import Link from "next/link";
import type {IProjectsList} from "@modules/pages/projects/projects.interface";
import CurveLine from "@modules/common/CurveLine";

const animation = {
	initial: {width: 0},
	open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
	closed: {width: 0}
}

const ProjectItem: FC<{ project: IProjectsList }> = ({project}) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const getPosterPath = (path: string) => {
		return require(`@modules/pages/projects/assets/${path}.jpg`)
			.default;
	};

	useEffect(() => {
		console.log(isActive, project.title1);

	}, [isActive]);


	return (
		<li
			onMouseEnter={() => {
				setIsActive(true)
			}}
			onMouseLeave={() => {
				setIsActive(false)
			}}
			className={s.container}
		>
			<Link href={project.link} className={s.link}>
				<p>{project.title1}</p>
				<motion.div
					variants={animation}
					animate={isActive ? "open" : "closed"}
					className={s.poster}
				>
					<Image
						className={s.posterImage}
						alt="Poster"
						src={getPosterPath(project.posterPath)}
					/>
				</motion.div>
				<p>{project.title2}</p>
			</Link>
		</li>
	)
}

export default ProjectItem;