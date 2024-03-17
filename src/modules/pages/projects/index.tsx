import {FC, Fragment} from 'react';

import ProjectItem from '@modules/pages/projects/components/ProjectItem';

import {PROJECTS} from '@utils/data';

import type {IProjectsList} from '@modules/pages/projects/interface';

import s from './Projects.module.scss';
import Line from "@modules/common/Line";
import {useMediaQuery} from "@hooks/index";
import {MOBILE_BREAKPOINT} from "@utils/const";

const Projects: FC = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	const LineItem = <li>
		<Line isStatic={isMobile} />
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
