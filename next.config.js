/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`
	},
	images: {
		unoptimized: true
	},
	trailingSlash: true
};

export default nextConfig;
