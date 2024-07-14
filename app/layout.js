import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/providers";
import { Navbar } from "@/components/component/navbar";
const inter = Inter({ subsets: ["latin"] });
import heroimage from "../public/heroimage.svg"
import Head from 'next/head';


export const metadata = {
  metadataBase: new URL('https://chai-and-study.vercel.app/'),

  title: "Chai & Study || Download Previous Years Question Papers for Various Courses",
  description: "Access previous years question papers for various courses absolutely free and for mdu, pu, du etc.",
  openGraph: {
    title: 'Chai & Study || Fuel up with chai and study',
    description: "Access previous years' question papers for various courses absolutely free and for mdu, pu, du etc.",
    url: 'https://chai-and-study.vercel.app/',
    type: 'website',
    images: [
      {
        url: '/heroimage.svg',
        width: 800,
        height: 600,
        alt: 'Hero image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://chai-and-study.vercel.app/',
    type: 'website',
    title: 'Chai & Study || Fuel up with chai and study',
    description: "Access previous years' question papers for various courses absolutely free and for mdu, pu, du etc.",
    images: [
      {
        url: '/heroimage.svg',
        alt: 'An image description',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
        {/* Microsoft Clarity Script */}
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "n7favdt468");`}
        </script>
      </Head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="container">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
