import siteConfig from "@/site.config.json";
import { cn } from "@utils/cn";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "Nextjs 14",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Basic Nextjs template",
    "portfolio",
    "modern",
    "portfolio-website",
    "animations",
    "portfolio-site",
    "react-template",
    "tailwindcss",
    "free-template",
    "nextjs-starter",
    "react-portfolio-template",
    "vercel",
    "nextjs14",
  ],
  authors: [
    {
      name: "Sarath Adhithya",
      url: "https://sarathadhi.com",
    },
  ],
  creator: "Sarath Adhithya",
  metadataBase: new URL(siteUrl!),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: `${siteUrl}${siteConfig.ogImage}`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteUrl}${siteConfig.ogImage}`],
    creator: "@AdhithyaSarath",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteUrl}/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(dmSans.className, bricolageGrotesque.variable)}>
        {children}
      </body>
    </html>
  );
}
