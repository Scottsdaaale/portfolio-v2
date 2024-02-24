/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      // Add a rule to handle PDF files
      config.module.rules.push({
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;