import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"Hoizr - Smart Booking for DJs, Agencies & Venues"}</title>
        <meta
          name="description"
          content="Hoizr is the all-in-one platform to connect DJs, agencies, and venues for seamless bookings, event planning, and growth. Simplify nightlife business with Hoizr."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Sanbedan Paul" />
        <meta
          name="keywords"
          content="DJ booking, nightlife, music platform, event host, agencies, artist management, venue discovery"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-surface min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
}
