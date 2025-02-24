/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hack.pet',
      },
      {
        protocol: 'https',
        hostname: 'cdn.hackclubber.dev',
      },
      {
        protocol: 'https',
        hostname: 'cloud-mglnk9hvm-hack-club-bot.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'aliceoseman.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.kobo.com',
      },
    ],
  },
};

export default nextConfig;

