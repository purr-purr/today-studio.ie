import s from './Line.module.scss';
import CurveLine from "@modules/common/CurveLine";
import {MOBILE_BREAKPOINT} from "@utils/const";
import {useMediaQuery} from "@hooks/index";

const Line = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	return isMobile ? (
		<hr className={s.container} />
	) : <CurveLine />;
}

export default Line;
