"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Floating papers background */}

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 inline-flex items-center rounded-full bg-gray-800/50 px-4 py-1 hover:text-blue-700">
              <span className="mr-2 text-blue-400">✦</span>
              <span className="text-sm">
                Advanced Capabilities, Priced Right with Cybership →
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Supercharging Warehouse Productivity
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-400"
          >
            Cybership delivers powerful WMS solutions that optimize inventory,
            streamline fulfillment, and scale your operations — all at a
            competitive price, tailored for modern logistics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-full bg-purple-600 px-8 text-white hover:bg-purple-700"
            >
              <Link href={"/dashboard"}>Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-purple-500 text-black hover:bg-purple-500/20 hover:text-white"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Dashboard preview below buttons */}
        </div>
      </div>
    </div>
  );
}
