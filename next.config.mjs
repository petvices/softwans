const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '', 
  assetPrefix: '', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
