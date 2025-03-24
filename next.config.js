/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  generateBuildId: async () => {
    // This will generate a new build ID on each build, forcing a clean cache
    return `build-${Date.now()}`
  },
}

module.exports = nextConfig
