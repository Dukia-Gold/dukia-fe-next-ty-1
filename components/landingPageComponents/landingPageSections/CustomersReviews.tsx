import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

interface reviewsArrayProps {
  key: number;
  name: string;
  review: string;
}

const CustomerReviews = () => {
  const reviewsArray: reviewsArrayProps[] = [
    {
      key: 1,
      name: "Abdullah Yusuf",
      review:
        "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
    },
    {
      key: 2,
      name: "Abdullah Yusuf",
      review:
        "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
    },
    {
      key: 3,
      name: "Abdullah Yusuf",
      review:
        "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
    },
    {
      key: 4,
      name: "Abdullah Yusuf",
      review:
        "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
    },
    {
      key: 5,
      name: "Abdullah Yusuf",
      review:
        "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
    },
    {
      key: 6,
      name: "Abdullah Yusuf",
      review:
        "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
    },
    {
      key: 7,
      name: "Abdullah Yusuf",
      review:
        "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
    },
    {
      key: 8,
      name: "Abdullah Yusuf",
      review:
        "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
    },
  ];

  return (
    <section className="px-2 md:px-8 py-12 bg-dukiaGrey text-dukiaBlue flex flex-col gap-14 items-center">
      <div className="flex flex-col gap-2 text-center">
        <p className="font-bold text-[1.75rem]">Customers Reviews</p>
        <p>
          Look at what various satisfied customers have to say about Dukia Gold!
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full px-11 "
      >
        <CarouselContent>
          {reviewsArray.map((review) => (
            <CarouselItem
              key={review.key}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <Card className="rounded-2xl">
                <CardContent className="flex flex-col pt-5 aspect-video gap-3 justify-center text-dukiaBlue text-sm">
                  <div className="flex justify-end"><Quote size={14} color="#111827" /></div>
                  <p>{review.review}</p>
                  <p className="font-bold">{review.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
          {/* {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <Card className="rounded-2xl">
                <CardContent className="flex aspect-video items-center justify-center">
                  <p>Abdullah Yusuf</p>
                  <p>I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))} */}
        </CarouselContent>
        <CarouselPrevious className="absolute text-white bg-dukiaBlue rounded-r-[50%] w-11 h-14 top-1/2 left-0" />
        <CarouselNext className="absolute text-white bg-dukiaBlue rounded-l-[50%] w-11 h-14 top-1/2 right-0" />
      </Carousel>
    </section>
  );
};

export default CustomerReviews;
