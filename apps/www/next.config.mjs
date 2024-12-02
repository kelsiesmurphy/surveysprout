/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/shared"],
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cothfwilejjjgulziyfd.supabase.co',
      port: '',
      pathname: '/storage/v1/object/public/**'
    }]
  },
};

export default nextConfig;