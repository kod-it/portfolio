import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: [{url:`${baseUrl}/favicon.ico`}]
  },
  title: {
    default: 'Akash Dip – Software Engineer',
    template: '%s | Akash Dip'
  },
  description: 'Optimising convenience, one lazy solution at a time.',
  
  // Optionally include keywords for SEO
  // (Keywords are less impactful than they used to be, but can still be included)
  keywords: ['Akash Dip', 'MERN Stack', 'Software Engineer', 'Portfolio', 'Cloud Integrations'],
  
  openGraph: {
    title: 'Akash Dip – Software Engineer & MERN Stack Developer',
    description: 'Discover scalable web apps, cloud integrations, and automated workflows in Akash Dip’s portfolio.',
    url: baseUrl,
    siteName: "Akash's Folio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/Ad.png`,
        width: 1200,
        height: 630,
        alt: 'Akash Dip Portfolio'
      }
    ]
  },

  // Optional: Add Twitter Card metadata for richer sharing on Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Dip – Software Engineer & MERN Stack Developer',
    description: 'Optimising convenience, one lazy solution at a time.',
    // If you have a Twitter username, you can include it here
    // site: '@yourTwitterHandle',
    // creator: '@yourTwitterHandle',
    images: [`${baseUrl}/Ad.png`]
  },

  // Robots settings to allow indexing and following
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  // Optionally specify a canonical URL
  // (In Next.js 13, you can also use `alternates: { canonical: baseUrl }` instead)
};


const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black ',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-5xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
