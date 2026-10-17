export default function robots() {
  const baseUrl = "https://addis-eats.vercel.app"; // Replace with your production base URL[cite: 1]

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout", "/kitchen", "/api/"], // Exclude private routes[cite: 1]
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
