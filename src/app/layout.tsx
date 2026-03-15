import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./client-layout";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxen | Premium Galaxy Projectors",
  description:
    "Transform any room into a breathtaking galaxy experience with Luxen premium night lights and galaxy projectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78YGM1RUlW4UeaQDPbh9xSYXTLrRFtJ2ysk0dH" type="image/png" />
        <link rel="preload" href="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78WZ0XA8n2lEyVhDXz2vU5jxeOc1u0FrmnwZf4" as="image" />
        <link rel="preconnect" href="https://cqdsz6sbj4.ufs.sh" />
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '957145853508671');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=957145853508671&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
