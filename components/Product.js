// eslint-disable-next-line @next/next/no-img-element
import { useContext } from 'react'
import { ProductsContext } from './ProductsContext'

export default function Product({
  _id,
  name,
  price,
  description,
  image,
  imageAlt,
  category,
}) {
  const { setSelectedProducts } = useContext(ProductsContext)
  function addProduct() {
    setSelectedProducts((prev) => [...prev, _id])
  }
  return (
    <div id={category} className="bg-neutral-50">
      <div className="bg-neutral-800 p-2 rounded-xl">
        <img
          className="min-w-[200px] md:min-w-[400px] min-h-[200px] md:min-h-[300px] h-[200px] md:h-[300px] object-cover"
          src={image}
          alt={imageAlt}
        />
      </div>
      <div className="h-[80px]">
        <div className="mt-2">
          <h3 className="font-bold text-lg">{name}</h3>
        </div>
        <p className="text-sm mt-1 leading-4 text-gray-500">{description}</p>

        <div className="text-sm font-bold grow pt-2">${price}</div>
      </div>
      <div className="">
        <button
          onClick={addProduct}
          className="mt-8 w-full inline-block rounded-md border border-transparent bg-yellow-400 px-8 py-2 text-base font-medium text-neutral-800 hover:bg-yellow-500 uppercase"
        >
          add to cart
        </button>
      </div>
    </div>
  )
}
