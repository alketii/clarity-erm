import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { mockUser } from "@/src/mock/user";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clarity EMR MVP",
  description: "Electronic Medical Records Insights Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          {/* Header */}
          <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
              <Link href="/dashboard" className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    Clarity EMR
                  </h1>
                  <p className="text-xs text-slate-500 font-medium">
                    Clinical Intelligence Platform
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-semibold text-slate-900">
                    {mockUser.name}
                  </div>
                  <div className="text-xs text-slate-600">
                    {mockUser.role.charAt(0).toUpperCase() +
                      mockUser.role.slice(1)}{" "}
                    <span className="text-slate-400">•</span> {mockUser.unit}
                  </div>
                </div>
                <div className="w-10 h-10 bg-linear-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-slate-700 font-bold text-sm">
                  {mockUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-6xl mx-auto py-8 px-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
