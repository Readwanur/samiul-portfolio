import { Plus_Jakarta_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Samiul Mollik — Lead Researcher with AI integrated Systems",
  description:
    "Portfolio of Md Samiul Mollik — Lead Researcher with AI integrated Systems, and Winner of the 7th Edition Harvard T.H. Chan School of Public Health HSIL Hackathon (Team Maverik).",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} ${geistMono.variable} dark scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] selection:bg-white selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
