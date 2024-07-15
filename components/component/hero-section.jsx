"use client"
import Image from "next/image";
import heroimage from "../../public/heroimage.svg"
import { useRouter } from "next/navigation";
import { FloatingLabelInput } from "../ui/floating-label-input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
export function HeroSection() {
  const router = useRouter()
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get("search")
    return router.push(`/search-results?query=${query}`)

  };
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
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <FloatingLabelInput className=" absolute" id="search" label="search" name="search" />
              <Button type="submit" className="absolute right-0" > <SearchIcon /> </Button>
            </div>
          </form>
        </div>
        <Image src={heroimage} priority alt="hero image" />
      </div>

    </section>)
  );
}
