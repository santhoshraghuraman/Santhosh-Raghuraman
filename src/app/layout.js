import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Santhosh R | AI & Full Stack Developer | Business Website Specialist",
  description:
    "Santhosh R is a professional AI & Full Stack Developer helping businesses, startups, and entrepreneurs build modern websites, scalable web applications, and intelligent automation systems.",
  keywords:
    "Santhosh R, AI Developer, Full Stack Developer, Business Website Specialist, Web Application Developer, Automation Solutions Builder, Technology Consultant, Next.js, React, FastAPI, Node.js",
  authors: [{ name: "Santhosh R" }],
  metadataBase: new URL("https://santhosh-portfolio-gamma.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Santhosh R | AI & Full Stack Developer | Business Website Specialist",
    description:
      "Santhosh R is a professional AI & Full Stack Developer helping businesses, startups, and entrepreneurs build modern websites, scalable web applications, and intelligent automation systems.",
    url: "https://santhosh-portfolio-gamma.vercel.app",
    siteName: "Santhosh R Portfolio",
    images: [
      {
        url: "/1.png",
        width: 800,
        height: 800,
        alt: "Santhosh R — AI & Full Stack Developer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santhosh R | AI & Full Stack Developer | Business Website Specialist",
    description:
      "Santhosh R is a professional AI & Full Stack Developer helping businesses, startups, and entrepreneurs build modern websites, scalable web applications, and intelligent automation systems.",
    images: ["/1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
