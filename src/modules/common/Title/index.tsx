import { createElement, FC } from 'react';
import cn from 'classnames';

import s from './Title.module.scss';

const Title: FC<{
	classname?: string;
	text: string;
	color?: 'dark' | 'primary';
	size?: 'small' | 'large';
}> = ({ classname, text, color = 'dark', size = 'large' }) => {
	const semanticTag = size === 'small' ? 'h3' : 'h2';
	const className = cn(
		s.container,
		s[`container--${color}`],
		s[`container--${size}`],
		classname,
	);

	//TODO color more 'dark' - excessive
	return createElement(semanticTag, { className }, text);
};

export default Title;
