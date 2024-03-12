import { FC } from 'react';
import Head from 'next/head';

import { AUTHOR_INFO, PRODUCTION_LINK } from '@utils/const';
import { COMPANY_INFO } from '@utils/data';
import { APP_META_DATA } from '@utils/meta';

import FAVICON from '@public/assets/favicon.ico';
import LOGO from '@public/assets/logo.svg';

const Meta: FC = () => {
	const metaManifestPath = '/assets/manifest.json';
	const metaDescription = APP_META_DATA.DESCRIPTION.HOME;
	const metaTitle = `${COMPANY_INFO.NAME} ${COMPANY_INFO.TYPE} | Web Development`;
	const metaAuthorSignature = AUTHOR_INFO.NAME + ' => ' + AUTHOR_INFO.SIGNATURE;
	const metaBrowserTheme = '#EFF0F9';
	const metaFavicon = FAVICON.src;
	const metaLogo = LOGO.src;

	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link href={metaFavicon} rel="icon" />
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta content={metaBrowserTheme} name="theme-color" />
			<meta content={metaTitle} name="description" />
			<link href={metaFavicon} rel="apple-touch-icon" />
			<link href={metaManifestPath} rel="manifest" />
			<title>{metaTitle}</title>
			<link rel="canonical" href={PRODUCTION_LINK} />
			<meta name="apple-mobile-web-main-title" content={metaTitle} />
			<meta name="apple-mobile-web-main-capable" content="yes" />
			<meta name="format-detection" content="telephone=no" />
			<meta name="format-detection" content="address=no" />
			<meta name="description" content={metaDescription} />
			<meta name="keywords" content={APP_META_DATA.KEYWORDS} />
			<meta name="author" content={metaAuthorSignature} />
			<meta name="image" content={metaLogo} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={metaTitle} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:image" content={metaLogo} />
			<meta property="og:url" content={PRODUCTION_LINK} />
		</Head>
	);
};

export default Meta;
