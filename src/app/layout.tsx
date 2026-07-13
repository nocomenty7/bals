import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "UPick - 세상의 모든 선택과 밸런스 게임",
  description: "연애, 음식, 일상, 상상력 등 의 도파민 터지는 밸런스 게임! 당신의 숨겨진 취향과 한계를 테스트해 보세요.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "UPick - 세상의 모든 선택과 밸런스 게임",
    description: "연애, 음식, 일상, 상상력 등 의 도파민 터지는 밸런스 게임! 당신의 숨겨진 취향과 한계를 테스트해 보세요.",
    url: "https://upick.kr",
    siteName: "UPick",
    images: [
      {
        url: "https://upick.kr/og-image.png",
        width: 1200,
        height: 630,
        alt: "UPick 밸런스 게임 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPick - 세상의 모든 선택과 밸런스 게임",
    description: "연애, 음식, 일상, 상상력 등 의 도파민 터지는 밸런스 게임! 당신의 숨겨진 취향과 한계를 테스트해 보세요.",
    images: ["https://upick.kr/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        {/* Google AdSense Verification Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3522634980237009"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full bg-[#080911] text-white antialiased">
        {/* Google Analytics (GA4) Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1EQTDJBSD4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1EQTDJBSD4');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
