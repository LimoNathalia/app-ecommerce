import Layout from '../components/Layout'
import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../components/ProductsContext'
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'

export default function CartPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)
  const [productsInfos, setProductsInfos] = useState([])

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)]
    fetch('/api/products?ids=' + uniqIds.join(','))
      .then((response) => response.json())
      .then((json) => setProductsInfos(json))
  }, [selectedProducts])

  function moreOfThisProduct(id) {
    setSelectedProducts((prev) => [...prev, id])
  }
  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id)
    if (pos !== -1) {
      setSelectedProducts((prev) => {
        return prev.filter((value, index) => index !== pos)
      })
    }
  }

  return (
    <Layout>
      <div className="bg-neutral-50">
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            Shopping Cart
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart.
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {!productsInfos.length && (
                  <div className="text-2xl">
                    no products in your shopping cart yet
                  </div>
                )}
                {productsInfos.length &&
                  productsInfos.map((productInfo) => {
                    const amount = selectedProducts.filter(
                      (id) => id === productInfo._id
                    ).length
                    if (amount === 0) return
                    return (
                      <li key={productInfo._id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <img
                            src={productInfo.image}
                            alt={productInfo.imageAlt}
                            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">
                                  <a
                                    href="#"
                                    className="font-medium text-neutral-800 hover:text-yellow-400"
                                  >
                                    {productInfo.name}
                                  </a>
                                </h3>
                              </div>
                              <p className="mt-1 text-sm font-medium text-gray-500">
                                {productInfo.description}
                              </p>
                              <p className="mt-1 text-sm font-medium text-neutral-800">
                                ${productInfo.price}
                              </p>
                            </div>

                            <div className="mt-4 sm:mt-0 sm:pr-9">
                              <div>
                                <button
                                  onClick={() =>
                                    lessOfThisProduct(productInfo._id)
                                  }
                                  className="border border-yellow-400 py-1  px-4 rounded-lg text-netral-800"
                                >
                                  -
                                </button>
                                <span className="px-4 py-1">
                                  {
                                    selectedProducts.filter(
                                      (id) => id === productInfo._id
                                    ).length
                                  }
                                </span>
                                <button
                                  onClick={() =>
                                    moreOfThisProduct(productInfo._id)
                                  }
                                  className="bg-yellow-400 py-1 px-4 rounded-lg text-neutral-800"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}
{
  /*
    <Layout>
      {!productsInfos.length && <div>no products in your shopping cart</div>}
      {productsInfos.length &&
        productsInfos.map((productInfo) => {
          const amount = selectedProducts.filter(
            (id) => id === productInfo._id
          ).length
          if (amount === 0) return
          return (
            <div className="flex mb-5 items-center" key={productInfo._id}>
              <div
                className="bg-gray-100 p-3 rounded-xl shrink-0"
                style={{ boxShadow: 'inset 1px 0px 10px 10px rgba(0,0,0,0.1)' }}
              >
                <img
                  className="w-24"
                  src={productInfo.image}
                  alt={productInfo.imageAlt}
                />
              </div>
              <div className="pl-4 items-center">
                <h3 className="font-bold text-lg">{productInfo.name}</h3>
                <p className="text-sm leading-4 text-gray-500">
                  {productInfo.description}
                </p>
                <div className="flex mt-1">
                  <div className="grow font-bold">${productInfo.price}</div>
                  <div>
                    <button
                      onClick={() => lessOfThisProduct(productInfo._id)}
                      className="border border-emerald-500 px-2 rounded-lg text-emerald-500"
                    >
                      -
                    </button>
                    <span className="px-2">
                      {
                        selectedProducts.filter((id) => id === productInfo._id)
                          .length
                      }
                    </span>
                    <button
                      onClick={() => moreOfThisProduct(productInfo._id)}
                      className="bg-emerald-500 px-2 rounded-lg text-neutral-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Layout>*/
}
