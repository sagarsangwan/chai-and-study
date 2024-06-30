import Image from "next/image";
import heroimage from "../../public/heroimage.svg"
import Link from "next/link"
export function HeroSection() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div
        className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Your Question Papers</h1>
          <p
            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            LastNightPaper is your one-stop solution for accessing previous year question papers. Ace your exams with
            our comprehensive collection of curated papers.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            Explore Papers
          </Link>
        </div>
        <Image src={heroimage} alt="hero image" />
      </div>
    </section>)
  );
}
