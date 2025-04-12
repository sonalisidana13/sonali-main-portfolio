import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});
const isExport = process.env.EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  ...(isExport && { output: 'export' }),
};

export default withMDX(nextConfig);
