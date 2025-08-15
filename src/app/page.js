"use client"
import Image from "next/image";
import RestaurantSlideshow from "@/components/RestaurantSlideShow";

export default function Home() {
  return (
    <div>
      <RestaurantSlideshow/>
      <div className="h-screen">Hi</div>
    </div>
  );
}
