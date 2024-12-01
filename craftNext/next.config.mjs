/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'c4.wallpaperflare.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.mos.cms.futurecdn.net',
            },
            {
                protocol: 'https',
                hostname: 'images.wallpapersden.com',
            },
            {
                protocol: 'https',
                hostname: 'images.alphacoders.com',
            },

        ],
    },
};

export default nextConfig;
