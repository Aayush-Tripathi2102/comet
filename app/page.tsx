"use client";

import { useState } from "react";
import Router from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import VideoBg from "@/components/VideoBg";
import Gifts from "@/components/Gifts";
import Vault from "@/components/Vault";
import GiftCard from "@/components/GiftCard";
import Appriciate from "@/components/Appriciate";
import Reviews from "@/components/Reviews";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
export default function Home() {
  const [authenticated, setAuthenticated] = useState(true);
  useEffect(() => {
    if (!authenticated) {
      Router.push("/login");
    }
  }, [authenticated]);
  return <main data-uid="element-1775114870133-36">
      <div className="bg-[#1f1f1f] flex w-full justify-center items-center text-[#eceb0b] py-2 text-sm" data-uid="element-1775114870133-37">
        🎉Apply FLAT400 at checkout to get 400 off🎉
      </div>
      <Navbar data-uid="component-1775114870133-38" />
      <Hero data-uid="component-1775114870133-39" />
      <Carousel data-uid="component-1775114870133-40" />
      <VideoBg data-uid="component-1775114870133-41" />
      <Gifts data-uid="component-1775114870133-42" />
      <Vault data-uid="component-1775114870133-43" />
      <GiftCard data-uid="component-1775114870133-44" />
      <Appriciate data-uid="component-1775114870133-45" />
      <Reviews data-uid="component-1775114870133-46" />
      <Banner data-uid="component-1775114870133-47" />
      <Features data-uid="component-1775114870133-48" />
      <Footer data-uid="component-1775114870133-49" />
    </main>;
}