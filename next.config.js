module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        // pathname: "*",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        // pathname: "*",
      },
    ],
  },
};
