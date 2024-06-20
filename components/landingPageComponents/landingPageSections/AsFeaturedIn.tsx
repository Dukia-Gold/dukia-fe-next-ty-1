import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AsFeaturedIn = () => {
  return (
    <section className="px-2 md:px-8 py-12 bg-dukiaGrey text-dukiaBlue flex flex-col gap-14 items-center">
      <div className="flex flex-col gap-2 text-center">
        <p className="font-bold text-2xl">As Featured In</p>
        <p>
          Look at what various respectable publications have to say about Dukia
          Gold!
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full px-11"
      >
        <CarouselContent>
          {Array.from({ length: 12 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="rounded-2xl">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute text-white bg-dukiaBlue rounded-r-[50%] w-11 h-14 top-1/2 left-0" />
        <CarouselNext className="absolute text-white bg-dukiaBlue rounded-l-[50%] w-11 h-14 top-1/2 right-0"/>
      </Carousel>
    </section>
  );
};

export default AsFeaturedIn;
