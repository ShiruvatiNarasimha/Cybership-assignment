import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Check } from "lucide-react";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Box className="h-6 w-6" />
            <span className="text-xl font-semibold text-white">cybership</span>
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Integrations
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-sm font-medium text-white hover:text-black"
            >
              Settings
            </Button>
            <Button>
              <Link
                href="/dashboard"
                className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200"
              >
                Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 pb-20 pt-32">
        <Hero />
        {/* Dashboard Preview */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="rounded-full">
            <Image
              src="/lan.png"
              alt="Cybership Dashboard"
              width={1200}
              height={600}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Inventory Management Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl bg-gray-900">
              <Image
                src="/rew.png"
                alt="Warehouse Automation"
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
                Modern Warehouse Management
              </h2>
              <p className="text-lg text-gray-400">
                Transform your logistics with our cloud-native platform
                featuring:
              </p>
              <ul className="space-y-4">
                {[
                  "Automated inventory reconciliation",
                  "Mobile-first warehouse operations",
                  "Real-time shipping analytics",
                  "Custom reporting dashboards",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <Check className="mr-3 h-5 w-5 min-w-[20px] text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Pick & Pack Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl bg-gray-900">
              <Image
                src="/shiru.png"
                alt="Warehouse Automation"
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
                Mobile Pick & Pack
              </h2>
              <p className="text-lg text-gray-400">
                With our mobile app, you can efficiently manage your warehouse
                operations and streamline your picking process.
              </p>
              <ul className="space-y-4">
                {[
                  "Pick multiple orders at once",
                  "Barcode scanning support",
                  "   Real-time updates",
                  "Custom reporting dashboards",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <Check className="mr-3 h-5 w-5 min-w-[20px] text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Shop Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Rate Shop</h2>
              <p className="text-gray-400">
                Save money on shipping by comparing rates from multiple carriers
                in real-time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  Compare rates across carriers
                </li>
                <li className="flex items-center text-gray-400">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  Automated best rate selection
                </li>
                <li className="flex items-center text-gray-400">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  Real-time shipping quotes
                </li>
              </ul>
              <Button variant="outline" className="border-gray-700">
                Learn More
              </Button>
            </div>
            <div>
              <Image
                src="/rem.png"
                alt="Rate Shop Interface"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="bg-black px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            Unlock the power of Cybership with competitive pricing and a rich
            feature set designed to revolutionize your logistics. Optimize your
            operations and scale your business effortlessly.
          </p>
          <Button className="h-12 rounded-lg bg-white px-8 text-black hover:bg-gray-200">
            Get started
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center space-x-2">
                <Box className="h-6 w-6" />
                <span className="text-xl font-semibold">cybership</span>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">FEATURES</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Cycle Count
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Merchant OS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Pick n Pack
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Rate Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Work Orders
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">LEGAL</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">
              Copyright © 2025 Cybership Technologies Inc. All Rights Reserved.
            </p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
