"use client"
import Image from "next/image";
import heroimage from "../../public/heroimage.svg"
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FloatingLabelInput } from "../ui/floating-label-input";
import SearchResults from "./SearchResults";
import { useState } from "react";
export function HeroSection() {
  const [query, setQuery] = useState("")
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()
  function handleSearch(term) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete('query')
    }
    replace(`${pathName}?${params.toString()}`)
  }
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div
        className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Your Question Papers</h1>
          <p
            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <span className="text-purple-500"> Chai & Study</span> is your one-stop solution for accessing previous year question papers. Ace your exams with
            our comprehensive collection of curated papers.
          </p>
          <FloatingLabelInput id="search" label="search" defaultValue={searchParams.get("query")?.toString() || ""} onChange={(e) => { handleSearch(e.target.value) }} />
        </div>
        <Image src={heroimage} alt="hero image" />
      </div>
      {/* <SearchResults query={ */}
    </section>)
  );
}
