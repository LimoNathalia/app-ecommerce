import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ProductsContext } from './ProductsContext'
import { ShoppingBagIcon, HomeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const router = useRouter()
  const path = router.pathname
  const { selectedProducts } = useContext(ProductsContext)
  return (
    <footer className="sticky bottom-0 bg-neutral-50 p-5 w-full flex border-t border-gray-200 justify-center space-x-12 text-neutral-800">
      <Link
        className={
          (path === '/' ? 'text-yellow-400' : '') +
          ' flex justify-center items-center flex-col'
        }
        href={'/'}
      >
        <HomeIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
        <span>Home</span>
      </Link>
      <Link
        className={
          (path === '/cart' ? 'text-yellow-400' : '') +
          ' flex justify-center items-center flex-col'
        }
        href={'/cart'}
      >
        <ShoppingBagIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
        <span>Cart {selectedProducts.length}</span>
      </Link>
    </footer>
  )
}
