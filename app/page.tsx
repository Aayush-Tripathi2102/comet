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

  return (
    <main>
      <div className="bg-[#1f1f1f] flex w-full justify-center items-center text-[#eceb0b] py-2 text-sm">
        🎉Apply FLAT400 at checkout to get 400 off🎉
      </div>
      <Navbar />
      <Hero />
      <Carousel />
      <VideoBg />
      <Gifts />
      <Vault />
      <GiftCard />
      <Appriciate />
      <Reviews />
      <Banner />
      <Features />
      <Footer />
    </main>
  );
}
