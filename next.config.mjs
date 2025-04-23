import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: 'export', // ← this is critical
  images: {
    unoptimized: true, // ← required for next/image to work in static exports
  },
};

export default withMDX(nextConfig);
