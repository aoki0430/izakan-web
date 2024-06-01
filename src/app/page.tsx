"use client";
import Header from "@/components/header";
import SearchCard from "@/components/searchCard";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-screen px-[20%]">
        <SearchCard />
      </div>
    </>
  );
}
