import {FC, Fragment} from 'react';

import CurveLine from '@modules/common/CurveLine';
import ProjectItem from '@modules/pages/projects/components/ProjectItem';
import type {IProjectsList} from '@modules/pages/projects/interface';

import {PROJECTS} from '@utils/data';

import s from './Projects.module.scss';

const Projects: FC = () => {
	return (
		<div className={s.container}>
			<ul className={s.list}>
				<li>
					<CurveLine />
				</li>
				{PROJECTS.map(
					(project: IProjectsList) =>
						project.isVisible && (
							<Fragment key={project.title1}>
								<ProjectItem project={project} />
								<CurveLine />
							</Fragment>
						),
				)}
			</ul>
		</div>
	);
};

export default Projects;
