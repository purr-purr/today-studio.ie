import {FC} from 'react';

import s from './Line.module.scss';
import CurveLine from "@modules/common/CurveLine";

const Line: FC<{
	isStatic?: boolean;
}> = ({isStatic = false}) => {
	return isStatic ? (
		<hr className={s.container} />
	) : <CurveLine />;
}

export default Line;
