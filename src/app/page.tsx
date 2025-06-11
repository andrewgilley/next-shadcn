import * as React from "react"

import { Card, CardContent } from "@/components/ui/card";

import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div>
        <Carousel
          opts={{
            align: "center",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="mr-3 w-40 hover:bg-gray-100">
                    <CardContent className="flex aspect-square items-center justify-center p-1">
                      <span className="text-2xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  )
}
