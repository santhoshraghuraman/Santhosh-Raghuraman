export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://santhosh-portfolio.vercel.app/sitemap.xml",
  };
}
