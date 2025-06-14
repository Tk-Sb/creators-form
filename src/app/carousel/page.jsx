'use client'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function Home() {
  

  return (
    <>
      <Carousel 
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full ml-16 max-w-xs cursor-grab "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div>
                  <div className="flex border-4 aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}