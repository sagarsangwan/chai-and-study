import { HeroSection, } from "@/components/component/hero-section";
import { ChevronRightIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import prisma from "@/lib/prisma";
import HomeFeatures from "@/components/component/home-features";


export default async function Home() {
  const allCourses = await prisma.Course.findMany()
  return (
    <div className="mb-96 ">
      <div>
        <HeroSection />
      </div>
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
        }
      </div>
      <div className="mt-14">
        <HomeFeatures />
      </div>
    </div>
  );
}
