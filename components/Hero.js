import Link from 'next/link'
import { Fragment, useState, useContext } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ProductsContext } from './ProductsContext'

const navigation = {
  categories: [
    {
      name: 'Blue',
      href: '#blue',
    },
    {
      name: 'Yellow',
      href: '#yellow',
    },
    {
      name: 'Red',
      href: '#red',
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Hero({ products }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { selectedProducts } = useContext(ProductsContext)

  return (
    <div className="bg-neutral-50">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-800 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-neutral-50 pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-neutral-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-neutral-800">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'border-b-yellow-400 text-yellow-400'
                                : 'border-transparent text-neutral-800',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          <a href={category.href}>{category.name}</a>
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                </Tab.Group>

                <div className="space-y-6 border-t border-neutral-800 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-neutral-800"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-neutral-800"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
      <div className="relative bg-neutral-800">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-neutral-800 opacity-50"
        />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-neutral-800">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-neutral-50 hover:text-yellow-400"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-neutral-50 hover:text-yellow-400"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary navigation */}
            <div className="bg-neutral-50 bg-opacity-10 backdrop-blur-md backdrop-filter">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <Link href={'/'}>
                        <button className="rounded-full bg-transparent bg-neutral-50 text-neutral-800 text-sm p-2">
                          NL
                        </button>
                      </Link>
                    </div>

                    <div className="hidden h-full lg:flex">
                      <Tab.Group as="div" className="mt-2">
                        <Tab.List className="-mb-px flex space-x-8 px-4">
                          {navigation.categories.map((category) => (
                            <Tab
                              key={category.name}
                              className="border-transparent text-neutral-50 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            >
                              <a href={category.href}>{category.name}</a>
                            </Tab>
                          ))}
                        </Tab.List>
                      </Tab.Group>
                    </div>

                    {/* Mobile menu */}
                    <div className="flex flex-1 items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 p-2 text-neutral-50"
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Logo (lg-) */}
                    <Link href={'/'} className="lg:hidden">
                      <button className="rounded-full bg-transparent bg-neutral-50 text-neutral-800 text-sm p-2">
                        NL
                      </button>
                    </Link>

                    <div className="flex flex-1 items-center justify-end">
                      <div className="flex items-center lg:ml-4">
                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-8">
                          <Link
                            href="/cart"
                            className="group -m-2 flex items-center p-2"
                          >
                            <div className=" flex items-center text-neutral-50 hover:text-yellow-400">
                              <ShoppingBagIcon
                                className="h-6 w-6 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="ml-2 text-sm font-medium">
                                {selectedProducts.length}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-50 lg:text-6xl">
            Selling colors
          </h1>
          <p className="mt-4 text-xl text-neutral-50">
            Check out the latest colors, while they're still in stock.
          </p>
          <a
            href="#product"
            className="mt-8 inline-block rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-neutral-800 hover:bg-yellow-500"
          >
            Shop New Colors
          </a>
        </div>
      </div>
    </div>
  )
}
