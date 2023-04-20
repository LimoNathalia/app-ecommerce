import Head from 'next/head'
import { useContext, useEffect } from 'react'
import Footer from './Footer'
import { ProductsContext } from './ProductsContext'

export default function Layout({ children }) {
  const { setSelectedProducts } = useContext(ProductsContext)
  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([])
    }
  }, [setSelectedProducts])
  return (
    <>
      <Head>
        <title>Ecommerce App - NL</title>
        <meta name="description" content="Welcome to the Ecommerce - NL" />
        <meta property="og:image" content="NL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <main className="">{children}</main>
      </div>
      <Footer />
    </>
  )
}
