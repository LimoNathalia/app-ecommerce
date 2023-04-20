import { useEffect, useState } from 'react'
import clientPromise from '../lib/mongodb'
import Product from '../components/Product'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default function Home({ isConnected }) {
  const [products, setProducts] = useState([])
  const [phrase, setPhrase] = useState('')

  const categoriesNames = [...new Set(products.map((p) => p.category))]

  useEffect(() => {
    ;(async () => {
      const results = await fetch('api/product')
      const resultsJson = await results.json()
      setProducts(resultsJson)
    })()
  }, [])
  return (
    <Layout>
      <Hero />
      <section className="bg-yellow-400 flex flex-col p-20 justify-center items-center">
        <h2 className="text-2xl pb-10">What is your favorite color?</h2>
        <input
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          type="text"
          placeholder="Search for products..."
          className="bg-neutral-800 w-[70%] py-2 px-4 rounded-xl text-neutral-50"
        />
      </section>
      <section className="p-20">
        <div id="product">
          {categoriesNames.map((categoryName) => (
            <div key={categoryName}>
              {products.find((p) => p.category === categoryName) && (
                <div>
                  <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                  <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                    {products
                      .filter((p) => p.category === categoryName)
                      .map((productInfo) => (
                        <div key={productInfo._id} className="px-3 snap-start">
                          <Product {...productInfo} />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
