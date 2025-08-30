"use client"
import Image from "next/image";
import RestaurantSlideshow from "@/components/RestaurantSlideShow";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <div className="bg-black">
      <RestaurantSlideshow/>
      <ComingSoon/>
    </div>
  );
}


