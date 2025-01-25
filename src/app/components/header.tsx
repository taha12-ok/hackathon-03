"use client"         

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useCart } from "../../../contexts/CartContext"
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa"
import { useClerk, SignedIn, SignedOut } from "@clerk/nextjs"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const { signOut } = useClerk()

  return (
    <>
      <header className="bg-white fixed top-0 left-0 right-0 z-50">
        {/* Top Banner */}
        <div className="w-full bg-[#272343] text-sm text-[#F0F2F3] py-2">
          <div className="flex justify-center items-center text-center mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs sm:text-sm">✓ Free Shipping On All Orders Over $50</p>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-[#F0F2F3]">
          <div className="flex flex-wrap justify-between items-center py-2 sm:py-4 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Mobile Menu Button */}
            <button className="md:hidden order-1" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="w-6 h-6 text-gray-800" />
              ) : (
                <FaBars className="w-6 h-6 text-gray-800" />
              )}
            </button>

            {/* Logo */}
            <div className="flex items-center order-2 md:order-1">
              <Image src="/logo.png" alt="Logo" width={32} height={32} className="sm:w-10 sm:h-10" />
              <span className="text-xl sm:text-2xl font-bold ml-2 text-gray-800">Comforty</span>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4 order-3 md:order-2">
              <SignedOut>
                <Link href="/sign-in" className="hidden sm:block">
                  <button className="flex items-center bg-[#00B4B4] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#009999] transition-colors text-sm">
                    <FaUserCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span>Sign In</span>
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <button
                  onClick={() => signOut()}
                  className="hidden sm:flex items-center bg-[#00B4B4] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#009999] transition-colors text-sm"
                >
                  <FaUserCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>Sign Out</span>
                </button>
              </SignedIn>
              <Link href="/cart">
                <button className="flex items-center bg-white text-black px-3 sm:px-4 py-2 rounded-lg text-sm">
                  <FaShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-black mr-2" />
                  <span className="hidden sm:inline">Cart</span>
                  {cartCount > 0 && (
                    <span className="ml-1 sm:ml-2 bg-[#007580] text-white rounded-full px-1.5 sm:px-2 py-0.5 text-xs">
                      {cartCount}
                    </span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image src="/logo.png" alt="Logo" width={32} height={32} />
                  <span className="text-xl font-bold ml-2">Comforty</span>
                </div>
                <button onClick={() => setMenuOpen(false)}>
                  <FaTimes className="w-6 h-6 text-gray-800" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <nav className="px-4 py-6">
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/"
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580]"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580]"
                      onClick={() => setMenuOpen(false)}
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/product"
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580]"
                      onClick={() => setMenuOpen(false)}
                    >
                      Select
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580]"
                      onClick={() => setMenuOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-lg font-semibold text-gray-800 hover:text-[#007580]"
                      onClick={() => setMenuOpen(false)}
                    >
                      Help
                    </Link>
                  </li>
                  {/* Mobile Sign In/Out Option */}
                  <SignedOut>
                    <li>
                      <Link
                        href="/sign-in"
                        className="text-lg font-semibold text-gray-800 hover:text-[#007580]"
                        onClick={() => setMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                    </li>
                  </SignedOut>
                  <SignedIn>
                    <li>
                      <button
                        onClick={() => {
                          signOut()
                          setMenuOpen(false)
                        }}
                        className="text-lg font-semibold text-gray-800 hover:text-[#007580]"
                      >
                        Sign Out
                      </button>
                    </li>
                  </SignedIn>
                </ul>
              </nav>
            </div>

            <div className="p-4 border-t">
              <div className="text-gray-600">Contact: 0306-0484798</div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-between items-center py-4">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/shop">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/product">
                    Select
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/faq">
                    Help
                  </Link>
                </li>
              </ul>
              <div className="text-gray-400 hover:text-[#007580]">Contact: 0306-0484798</div>
            </nav>
          </div>
        </div>
      </header>
      <div className="h-[120px] sm:h-[180px]"></div>
    </>
  )
}