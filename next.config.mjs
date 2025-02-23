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
        //port: '',
        //pathname: '/account123/**',
        //search: '',
      },
    ],
  },
};

export default nextConfig;
