/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "s.gravatar.com" },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};
