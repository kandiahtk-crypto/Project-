
import type { MetadataRoute } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/markets",
    "/markets/usa",
    "/markets/europe",
    "/markets/china",
    "/markets/india",
    "/programmes",
    "/contact",

    "/tour-operator-transport-uk",
    "/coach-hire-uk",
    "/dmc-transport-uk",
    "/uk-ireland-touring",
    "/heathrow-group-transfers",
    "/southampton-cruise-transfers",

    "/england-touring",
    "/scotland-programmes",
    "/ireland-touring",

    "/gdpr-data-protection",
    "/modern-slavery-statement",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
