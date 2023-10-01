/**
 * @type {import('next').NextConfig}
 */

const NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				port: '',
				pathname: '/**'
			}
		]
	}
}

module.exports = NextConfig
