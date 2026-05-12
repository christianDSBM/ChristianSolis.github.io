/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- AÑADE ESTA LÍNEA
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
