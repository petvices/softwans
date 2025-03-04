const isProd = process.env.NODE_ENV === 'production';
const repoName = 'softwans'; // Reemplaza con el nombre de tu repositorio

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // Para evitar problemas con imágenes en `next export`
  },
};

export default nextConfig;
