import { HeroSection, } from "@/components/component/hero-section";
import { ChevronRightIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import prisma from "@/lib/prisma";
export async function generateMetadata() {
  return {
    title: 'Home Page || Last Night Paper',
    description: "Access comprehensive study material and previous year question papers for MDU University across all streams, including CSE, Civil, and more. Boost your exam preparation with our extensive"
  }
}

export default async function Home() {
  const allCourses = await prisma.Course.findMany()
  // console.log(allCourses)
  return (

    <div className="mb-96">
      <HeroSection />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allCourses ?
          allCourses.map((course) => (

            <Card key={course.id}
              className="relative overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <Link href={`/streams/${course.id}`} className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View subject</span>
              </Link>
              <div className="p-6 bg-background">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">

                    <h3 className="text-xl font-semibold">{course.name}</h3>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <ChevronRightIcon className="w-4 h-4" />
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">
                  {course.description}
                </p>
              </div>
            </Card>
          )) :
          <div>no courses</div>
        }</div>



    </div>
  );
}
