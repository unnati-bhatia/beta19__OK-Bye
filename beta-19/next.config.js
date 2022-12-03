/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: ['stripe-camo.global.ssl.fastly.net','www.google.com','bit.ly'],
	},
}

module.exports = nextConfig


