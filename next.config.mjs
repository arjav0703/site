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
        hostname: 'cdn2.penguin.com.au',
      },
      {
        protocol: 'https',
        hostname: 'cdn.kobo.com',
      },
    ],
  },
};

export default nextConfig;

