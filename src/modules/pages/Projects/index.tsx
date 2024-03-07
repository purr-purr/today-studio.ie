import {FC} from 'react';

import CurveLine from '@modules/common/CurveLine';
import ProjectItem from '@modules/pages/projects/components/ProjectItem';

import s from './Projects.module.scss';
import type {IProjectsList} from "@modules/pages/projects/interface";

const Projects: FC = () => {
	const projects: IProjectsList[] = [
		{
			isVisible: true,
			title1: 'ten',
			title2: 'lait',
			link: 'https://tenlait.lviv.ua/',
			posterPath: 'tenlait',
		},
		{
			isVisible: true,
			title1: 'alter-',
			title2: 'energo',
			link: 'https://alter-energo.in.ua/',
			posterPath: 'alterenergo',
		},
		{
			isVisible: true,
			title1: 'akula',
			title2: 'development',
			link: 'https://akula.in.ua/',
			posterPath: 'akula',
		},
		{
			isVisible: true,
			title1: 'excelsa',
			title2: 'consult',
			link: 'https://excelsaconsult.com/',
			posterPath: 'excelsa',
		},
		{
			isVisible: true,
			title1: 'ham',
			title2: 'aun',
			link: 'https://hamaiun.com.ua/',
			posterPath: 'hamaiun',
		},
		{
			isVisible: true,
			title1: 'delivery',
			title2: 'auto',
			link: 'https://delivery-auto.com/en-us',
			posterPath: 'delivery',
		},
		{
			isVisible: true,
			title1: 'del',
			title2: 'truck',
			link: 'https://deltruck.com/en-us',
			posterPath: 'deltruck',
		},
		{
			isVisible: true,
			title1: 'set',
			title2: 'mis',
			link: 'https://setmis.lviv.ua/',
			posterPath: 'setmis',
		},
		{
			isVisible: true,
			title1: 'bekket',
			title2: 'inu',
			link: 'https://bekketinu.pro/',
			posterPath: 'bekketinu',
		},
		{
			isVisible: true,
			title1: 'bfuwwt',
			title2: 'fund',
			link: 'https://bfuwwt.com.ua/',
			posterPath: 'bfuwwt',
		},
		{
			isVisible: true,
			title1: 'whih',
			title2: 'fund',
			link: 'https://whih.com.ua/index_en.html',
			posterPath: 'whih',
		},
	];

	return (
		<div className={s.container}>
			<ul className={s.list}>
				{projects.map(
					(project) =>
						project.isVisible && (
							<>
								<ProjectItem key={project.title1} project={project}/>
								<CurveLine/>
							</>
						),
				)}
			</ul>
		</div>
	);
};

export default Projects;
