import s from "./Logo.module.scss";
import {COMPANY_INFO} from "@utils/data";
import Link from "next/link";
import {FC} from "react";
import cn from "classnames";

const Logo: FC<{ classname?: string }> = ({classname}) => {
	return (
		<Link className={cn(classname, s.container)} href="/">
			{COMPANY_INFO.NAME.toUpperCase()}
		</Link>
	);
};

export default Logo;
