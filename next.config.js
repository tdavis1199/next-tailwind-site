/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force a new deployment with timestamp: 2025-03-24T18:27
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
