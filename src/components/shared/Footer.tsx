"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "../ui/input";

const links = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const locations = ["Dhaka", "Chattogram", "Sylhet", "Rajshahi"];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight md:mx-3 xl:text-2xl">
            Subscribe to our newsletter for{" "}
            <span className="text-primary">tasty updates 🍔</span>
          </h1>

          <div className="mt-6 md:mx-3 md:mt-0">
            <div className="text-center md:text-left">
            
              <form className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="rounded-full border border-gray-300 focus-visible:ring-[#FF3C48]"
                />
                <Button
                  type="submit"
                  className="bg-[#FF3C48] hover:bg-[#e0353f] text-white px-6 py-3 rounded-full font-semibold"
                >
                  SUBSCRIBE
                </Button>
              </form>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Grid Links */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Quick Links */}
          <div>
            <p className="font-semibold">Quick Links</p>
            <div className="mt-5 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary hover:underline "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Food Locations */}
          <div>
            <p className="font-semibold">Food Locations</p>
            <div className="mt-5 space-y-2">
              {locations.map((location) => (
                <a
                  key={location}
                  href="#"
                  className="block text-gray-300 hover:underline hover:text-primary"
                >
                  {location}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <p className="font-semibold">Categories</p>
            <div className="mt-5 space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:underline hover:text-primary"
              >
                Street Food
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:underline hover:text-primary"
              >
                Fine Dining
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:underline hover:text-primary"
              >
                Cafés & Desserts
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-semibold">Contact Us</p>
            <div className="mt-5 space-y-2">
              <a
                href="tel:+8807684734978"
                className="block text-gray-300 hover:underline hover:text-primary"
              >
                +880 768 473 4978
              </a>
              <a
                href="mailto:info@foodreview.com"
                className="block text-gray-300 hover:underline hover:text-primary"
              >
                info@foodreview.com
              </a>
              <div className="flex items-center space-x-3">
                <a
                  href=""
                  className="p-2 hover:bg-primary text-white rounded-full transition-colors duration-500"
                >
                  <Facebook />
                </a>
                <a
                  href=""
                  className="p-2 hover:bg-primary text-white rounded-full transition-colors duration-500"
                >
                  <Instagram />
                </a>
                <a
                  href=""
                  className="p-2 hover:bg-primary text-white rounded-full transition-colors duration-500"
                >
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="">
            <Image
              src="/image/logo/🦆 icon _dish spoon knife_.png"
              height={80}
              width={80}
              alt="logo icon"
            />
            <span className=" text-lg font-mono">Rate My Bite</span>
          </div>
          <p className=" text-sm text-gray-400 sm:mt-0">
            © 2025 Food Review. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
