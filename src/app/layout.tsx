import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { constructionConfig } from "@/data/construction";
import "./globals.css";

const fontDisplay = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: "variable",
  axes: ["SOFT", "WONK", "opsz"],
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const { brand, contact } = constructionConfig;
const siteTitle = `${brand.name} | ${brand.tagline}`;
const siteDescription = brand.shortDescription;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${brand.name}`,
  },
  description: siteDescription,
  keywords: [
    "construction company",
    "building contractor",
    "residential construction",
    "commercial construction",
    "home builder",
    "renovation contractor",
    "building projects",
    "Gauteng builder",
    "Cape Town builder",
    "Durban builder",
    brand.name,
  ].join(", "),
  authors: [{ name: brand.name }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_ZA",
    siteName: brand.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  name: brand.name,
  description: brand.shortDescription,
  url: "https://vanguard-build-group.vercel.app/",
  telephone: contact.phone,
  email: contact.email,
  image: "/after.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.headquartersAddress.street,
    addressLocality: contact.headquartersAddress.city,
    addressRegion: contact.headquartersAddress.state,
    postalCode: contact.headquartersAddress.zip,
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.coordinates.lat,
    longitude: contact.coordinates.lng,
  },
  areaServed: brand.coverageRegions.map((region) => ({
    "@type": "City",
    name: region,
  })),
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: brand.licenseNumber,
      description: `NHBRC Registration ${brand.licenseNumber}`,
    },
  ],
  knowsAbout: [
    "Residential Construction",
    "Commercial Construction",
    "Structural Renovations",
    "Project Management",
    "Custom Home Building",
  ],
  foundingDate: "2000",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 120 },
  priceRange: "R250,000 - R130,000,000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-ZA"
      className={`${fontDisplay.variable} ${fontBody.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-body text-foreground antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
