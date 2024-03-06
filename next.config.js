/**
 * @type {import('next').NextConfig}
 */
// const withImages = require('next-images');

const nextConfig = {
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
	},
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
