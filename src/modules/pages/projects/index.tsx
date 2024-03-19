import {FC, Fragment} from 'react';

import ProjectItem from '@modules/pages/projects/components/ProjectItem';

import {PROJECTS} from '@utils/data';

import type {IProjectsList} from '@modules/pages/projects/interface';

import s from './Projects.module.scss';
import Line from "@modules/common/Line";

const Projects: FC = () => {
	const LineItem = <li>
		<Line />
	</li>;

	return (
		<div className={s.container}>
			<ul className={s.list}>
				{LineItem}
				{PROJECTS.map(
					(project: IProjectsList) =>
						project.isVisible && (
							<Fragment key={project.titleFirstPart}>
								<ProjectItem project={project} />
								{LineItem}
							</Fragment>
						),
				)}
			</ul>
		</div>
	);
};

export default Projects;
