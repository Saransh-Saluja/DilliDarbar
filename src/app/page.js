"use client"
import Image from "next/image";
import RestaurantSlideshow from "@/components/RestaurantSlideShow";

export default function Home() {
  return (
    <div className="bg-black">
      <RestaurantSlideshow/>
      <div className="h-screen bg-black">Hi</div>
    </div>
  );
}
