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
  return <main data-uid="page-1775085187939-36">
      <div className="bg-[#1f1f1f] flex w-full justify-center items-center text-[#eceb0b] py-2 text-sm" data-uid="page-1775085187939-37">
        🎉Apply FLAT400 at checkout to get 400 off🎉
      </div>
      <Navbar data-uid="page-1775085187939-38" />
      <Hero data-uid="page-1775085187939-39" />
      <Carousel data-uid="page-1775085187939-40" />
      <VideoBg data-uid="page-1775085187939-41" />
      <Gifts data-uid="page-1775085187939-42" />
      <Vault data-uid="page-1775085187939-43" />
      <GiftCard data-uid="page-1775085187939-44" />
      <Appriciate data-uid="page-1775085187939-45" />
      <Reviews data-uid="page-1775085187939-46" />
      <Banner data-uid="page-1775085187939-47" />
      <Features data-uid="page-1775085187939-48" />
      <Footer data-uid="page-1775085187939-49" />
    </main>;
}